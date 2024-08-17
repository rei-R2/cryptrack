"use client";

import { Input } from "@/components/ui/input";
import z from "zod";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";

const formSchema = z.object({
  username: z.string().min(2).max(250),
  email: z.string().min(6).max(250),
  password: z.string().min(8).max(12),
  photo: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image must less than 4MB",
    }),
});

export default function Profile() {
  const [state, formAction] = useFormState(handleEditProfile, null);

  return (
    <div className="mb-10 mt-20 h-fit bg-dark px-7">
      <p className="text-md mb-4 text-center font-medium text-white-custome">
        Edit Profile
      </p>
      {/* <div className="relative mx-auto h-24 w-24 rounded-full">
        <Image src="" alt="" fill={true} />
      </div> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="96"
        height="96"
        fill="currentColor"
        className="bi bi-person-circle mx-auto text-light-gray-2"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
        />
      </svg>

      <div className="mx-auto mt-10">
        <form action={formAction} className="flex flex-col gap-y-3">
          <Field
            element="username"
            typeInput="text"
            status={state?.status}
            message={state?.message}
          />
          <Field
            element="email"
            typeInput="email"
            status={state?.status}
            message={state?.message}
          />
          <Field
            element="password"
            typeInput="password"
            status={state?.status}
            message={state?.message}
          />
          <Field
            element="photo"
            typeInput="file"
            status={state?.status}
            message={state?.message}
          />

          <Button
            type="submit"
            className="mt-5 w-full bg-blue-500 transition duration-500 hover:bg-blue-500/80"
          >
            Save Change
          </Button>
        </form>
      </div>
    </div>
  );
}

const Field = ({
  element,
  typeInput,
  status,
  message,
}: {
  element: string;
  typeInput: string;
  status?: number;
  message?: {
    [key: string]: string[];
  };
}) => {
  return (
    <div className="mt-1">
      <Label
        htmlFor={element}
        className={`${status === 400 && message![element] ? "text-red-500" : "text-light-gray-2"} mb-2 block text-sm`}
      >
        {element}
      </Label>
      <Input
        id={element}
        type={typeInput}
        name={element}
        className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 bg-dark text-start text-white-custome file:bg-light-gray-1 file:text-light-gray-2 focus-visible:ring-0"
      />
      {status === 400 && message![element] && (
        <p className="mt-1 text-sm text-red-500">{message![element]}</p>
      )}
    </div>
  );
};

interface EditProfile {
  status: number;
  message: {
    [key: string]: string[];
  };
}

const handleEditProfile = (
  prevState: unknown,
  formData: FormData,
): EditProfile => {
  const validatedFields = formSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      status: 400,
      message: validatedFields.error.flatten().fieldErrors,
    };
  } else {
    const { username, email, password, photo } = validatedFields.data;
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(photo);
    return {
      status: 200,
      message: {
        success: ["Success for update profile"],
      },
    };
  }
};
