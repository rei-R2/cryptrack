"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useToast } from "@/components/ui/use-toast";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { handleEditProfile } from "@/utils/users";
import { useSession } from "next-auth/react";
import { DataUser } from "@/typs";

interface ResponseUpdate {
  status: number;
  dataFrom: string;
  message: {
    msg: string[];
  };
}

export default function FormEditProfile({ user }: { user: DataUser | null }) {
  const { data } = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const [state, formAction] = useFormState(
    handleEditProfile.bind(null, data?.user.id as string),
    null,
  );

  useEffect(() => {
    if (state?.status === 200 && state.dataFrom === "updateing user") {
      const response = state as ResponseUpdate;
      toast({
        title: "Success Update",
        description: response.message.msg[0],
        style: {
          backgroundColor: "#272727",
          color: "#F9F9F9",
          borderColor: "#272727",
        },
      });
      setIsLoading(false);
    } else if (state?.status === 400 && state.dataFrom === "updateing user") {
      const response = state as ResponseUpdate;
      toast({
        title: "Faild Update",
        description: response.message.msg[0],
      });
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, toast]);
  return (
    <div className="mx-auto mt-10 w-full lg:mt-16 lg:w-96">
      <form
        action={formAction}
        onSubmit={() => setIsLoading(true)}
        className="flex flex-col gap-y-3"
      >
        <Field
          element="username"
          typeInput="text"
          status={state?.status}
          message={state?.message}
          defaultValue={user?.username}
        />
        <Field
          element="email"
          typeInput="email"
          status={state?.status}
          message={state?.message}
          defaultValue={user?.email}
        />
        <Field
          element="img"
          typeInput="file"
          status={state?.status}
          message={state?.message}
          defaultValue={""}
        />

        <Button
          disabled={isLoading}
          type="submit"
          className="mt-5 w-full rounded-none bg-blue-500 transition duration-500 hover:bg-blue-500/80"
        >
          {isLoading ? "Loading..." : "Save Change"}
        </Button>
      </form>
    </div>
  );
}

const Field = ({
  element,
  typeInput,
  status,
  message,
  defaultValue,
}: {
  element: string;
  typeInput: string;
  status?: number;
  message?: {
    [key: string]: string[];
  };
  defaultValue?: string | undefined;
}) => {
  return (
    <div className="mt-1">
      <Label
        htmlFor={element}
        className={`${status === 400 && message![element] ? "text-red-500" : "text-light-gray-2"} block text-sm font-normal`}
      >
        {element}
      </Label>
      <Input
        id={element}
        type={typeInput}
        name={element}
        defaultValue={defaultValue}
        className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 px-0 text-base text-white-custome file:bg-light-gray-1 file:text-light-gray-2 focus-visible:ring-0"
      />
      {status === 400 && message![element] && (
        <p className="mt-1 text-sm text-red-500">{message![element]}</p>
      )}
    </div>
  );
};
