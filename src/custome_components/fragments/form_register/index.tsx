"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { userRegister } from "@/utils/users";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2).max(250),
  email: z.string().min(6).max(250),
  password: z
    .string()
    .min(8)
    .max(12)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
      { message: "password does not comply with the provisions" },
    ),
  confirmPassword: z
    .string()
    .min(8)
    .max(12)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
      { message: "password does not comply with the provisions" },
    ),
});

export default function FormRegister() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [faildRegister, setFaildRegister] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const { control, handleSubmit, setError, formState } = form;

  const handleRegister = handleSubmit(async (value) => {
    setIsLoading(true);
    const checkConfirmPassword = value.password === value.confirmPassword;
    if (!checkConfirmPassword) {
      setIsLoading(false);
      return setError("confirmPassword", {
        message: "confirm passwords is different",
      });
    } else {
      const result = await userRegister({
        username: value.username,
        email: value.email,
        password: value.password,
      });
      if (result?.status === 400) {
        setIsLoading(false);
        setFaildRegister(result.message);
      } else {
        setIsLoading(false);
        push("/auth/login");
      }
    }
  });

  return (
    <div className="mt-5">
      <Form {...form}>
        <form
          onSubmit={handleRegister}
          className="flex h-fit w-full flex-col gap-y-3"
        >
          <FormField
            name="username"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal text-light-gray-2">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    style={{ margin: 0 }}
                    className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 px-0 text-base text-white-custome focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal text-light-gray-2">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    style={{ margin: 0 }}
                    className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 px-0 text-base text-white-custome focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal text-light-gray-2">
                  Password
                </FormLabel>
                <FormControl>
                  <>
                    <Input
                      type="password"
                      style={{ margin: 0 }}
                      className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 px-0 text-base text-white-custome focus-visible:ring-0"
                      {...field}
                    />
                    <ul className="ml-3 list-disc">
                      <li className="text-xs text-light-gray-2">
                        Password length must be 8-12 characters.
                      </li>
                      <li className="text-xs text-light-gray-2">
                        Must contain at least one lowercase, uppercase letter.
                      </li>
                      <li className="text-xs text-light-gray-2">
                        Must contain at least one number.
                      </li>
                      <li className="text-xs text-light-gray-2">
                        Must contain at least one special character.
                      </li>
                    </ul>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal text-light-gray-2">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    style={{ margin: 0 }}
                    className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 px-0 text-base text-white-custome focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            type="submit"
            className="mt-4 w-full rounded-none bg-light-green text-dark transition duration-500 hover:bg-light-green/80"
          >
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
      {faildRegister && (
        <p className="mt-1 text-center text-xs text-red-500">
          *{faildRegister}
        </p>
      )}
      <p className="mt-5 text-center text-xs text-light-gray-2">
        Already have an account?{" "}
        <Link
          href={"/auth/login"}
          className="underline decoration-light-green underline-offset-1"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
