"use server";

import { prismaClient } from "./prisma";
import bcrypt from "bcrypt";
import { del, put } from "@vercel/blob";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const userLogin = async (email: string, password: string) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      return {
        status: 200,
        message: "Success to login",
        data: { ...user },
      };
    } else {
      return {
        status: 400,
        message: "Password does not match",
        data: null,
      };
    }
  } else {
    return {
      status: 400,
      message: "User not found",
      data: null,
    };
  }
};

export const userRegister = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  return await prismaClient.$transaction(async (tx) => {
    const checkEmail = await tx.user.findUnique({
      where: {
        email,
      },
    });
    if (checkEmail) {
      return {
        status: 400,
        message: "Email already exist",
      };
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const register = await tx.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });
    if (register) {
      return {
        status: 200,
        message: "Success to register",
      };
    }
  });
};

export const getUser = async ({ by, value }: { by: string; value: string }) => {
  if (by === "id") {
    const user = await prismaClient.user.findUnique({
      where: {
        id: value,
      },
      include: {
        watchlist: true,
      },
    });

    if (user) {
      return {
        status: 200,
        message: "Success get user",
        data: user,
      };
    } else {
      return {
        status: 400,
        message: "Faild get user",
        data: null,
      };
    }
  } else {
    const user = await prismaClient.user.findUnique({
      where: {
        email: value,
      },
      include: {
        watchlist: true,
      },
    });

    if (user) {
      return {
        status: 200,
        message: "Success get user",
        data: user,
      };
    } else {
      return {
        status: 400,
        message: "Faild get user",
        data: null,
      };
    }
  }
};

export const addWatchlist = async (userId: string, cryptoId: string) => {
  const result = await prismaClient.watchList.create({
    data: {
      crypto_id: cryptoId,
      user_id: userId,
    },
  });
  if (result) {
    return {
      status: 200,
      message: "Success add watchhlist",
    };
  } else {
    return {
      status: 400,
      message: "Faild add watchhlist",
    };
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await prismaClient.user.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const formSchema = z.object({
  username: z.string().min(2).max(250),
  email: z.string().min(6).max(250),
  img: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image must less than 4MB",
    })
    .optional(),
});

type EditProfile =
  | {
      status: number;
      dataFrom: string;
      message: {
        username?: string[] | undefined;
        email?: string[] | undefined;
        img?: string[] | undefined;
      };
    }
  | {
      status: number;
      dataFrom: string;
      message: {
        msg: string[];
      };
    };

export const handleEditProfile = async (
  id: string,
  prevState: unknown,
  formData: FormData,
): Promise<EditProfile> => {
  const validatedFields = formSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      status: 400,
      dataFrom: "validation",
      message: validatedFields.error.flatten().fieldErrors,
    };
  } else {
    const data = await getImageById(id);
    if (!data) {
      return {
        status: 400,
        dataFrom: "updateing user",
        message: {
          msg: ["No Data Found"],
        },
      };
    }

    const { username, email, img } = validatedFields.data;
    let imagePath;

    if (!img || img.size <= 0) {
      imagePath = "";
    } else {
      if (data.img) {
        await del(data.img);

        const { url } = await put(img.name, img, {
          access: "public",
          multipart: true,
        });
        imagePath = url;
      } else {
        const { url } = await put(img.name, img, {
          access: "public",
          multipart: true,
        });
        imagePath = url;
      }
    }

    const dataToUpdate = imagePath
      ? {
          username,
          email,
          img: imagePath,
        }
      : { username, email };

    const update = await prismaClient.user.update({
      where: {
        email,
      },
      data: dataToUpdate,
    });

    revalidatePath("/profile");
    revalidatePath("/home");
    if (update) {
      return {
        status: 200,
        dataFrom: "updateing user",
        message: {
          msg: ["Success for update profile"],
        },
      };
    } else {
      return {
        status: 400,
        dataFrom: "updateing user",
        message: {
          msg: ["Faild for update profile"],
        },
      };
    }
  }
};

export const removeWatchlist = async (userId: string, cryptoId: number) => {
  const crypto_id = cryptoId.toString();
  return await prismaClient.$transaction(async (tx) => {
    const watchhlist = await tx.watchList.findMany({
      where: {
        user_id: userId,
      },
    });
    const getWatchlist = watchhlist.find(
      (data) => data.crypto_id === crypto_id,
    );
    const remove = await tx.watchList.delete({
      where: {
        id: getWatchlist?.id,
      },
    });
    if (remove) {
      revalidatePath("/watchlist");
      return {
        status: 200,
        message: "Success to remove",
      };
    } else {
      return {
        status: 400,
        message: "Faild to remove",
      };
    }
  });
};
