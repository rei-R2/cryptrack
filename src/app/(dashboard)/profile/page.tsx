import Image from "next/image";
import { getUser } from "@/utils/users";
import FormEditProfile from "@/custome_components/fragments/form_edit_profile";
import { getServerSession } from "next-auth/next";
import { GET } from "@/app/api/auth/[...nextauth]/route";
import { DataUser, Sessionn } from "@/typs";

export default async function Profile() {
  const session: Sessionn | null = await getServerSession(GET);
  const user =
    session &&
    (await getUser({ by: "email", value: session?.user.email })).data;

  return (
    <div className="relative mb-10 mt-20 h-fit bg-dark px-7 md:ml-56 md:mt-10 md:h-[93.5%]">
      <p className="text-md mb-4 text-center font-medium text-white-custome">
        Edit Profile
      </p>
      {user?.img ? (
        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
          <Image
            src={user.img}
            alt="photo profile"
            fill={true}
            sizes="100%"
            className="object-cover"
          />
        </div>
      ) : (
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
      )}

      <FormEditProfile user={user as DataUser} />
    </div>
  );
}
