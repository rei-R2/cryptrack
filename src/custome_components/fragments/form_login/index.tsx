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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(6).max(250),
  password: z.string().min(8).max(12),
});

export default function FormLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { push } = useRouter();
  const serachParams = useSearchParams();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hiddenInputPswd, setHiddenInputPswd] = useState<boolean>(true);

  const { control, handleSubmit } = form;

  const callbackUrl = serachParams.get("callbackURL") || "/home";
  const handleLogin = handleSubmit(async (value) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: value.email,
      password: value.password,
      callbackUrl,
    });

    if (result?.ok) {
      setIsLoading(false);
      push(callbackUrl);
    } else {
      setIsLoading(false);
      setError("Incorrect email or password");
    }
  });

  return (
    <div className="mt-5">
      <Form {...form}>
        <form
          onSubmit={handleLogin}
          className="flex h-fit w-full flex-col gap-y-3"
        >
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
                <FormMessage className="text-xs" />
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
                  <div className="relative">
                    <Input
                      type={hiddenInputPswd ? "password" : "text"}
                      style={{ margin: 0 }}
                      className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 px-0 text-base text-white-custome focus-visible:ring-0"
                      {...field}
                    />
                    <div
                      onClick={() => setHiddenInputPswd(!hiddenInputPswd)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {" "}
                      {hiddenInputPswd ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-eye-slash text-light-gray-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                          <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-eye text-light-gray-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            type="submit"
            className="relative mt-4 w-full rounded-none bg-light-green text-dark transition duration-500 hover:bg-light-green/80"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
      {error && (
        <p className="mt-1 text-center text-xs text-red-500">*{error}</p>
      )}
      <p className="mt-5 text-center text-xs text-light-gray-2">
        Don`t have an account yet?{" "}
        <Link
          href={"/auth/register"}
          className="underline decoration-light-green underline-offset-1"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
