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
      console.log();
      setIsLoading(false);
      push(callbackUrl);
    } else {
      setIsLoading(false);
      setError("Incorrect email or password");
    }
  });

  return (
    <div className="mt-5 px-5">
      <Form {...form}>
        <form
          onSubmit={handleLogin}
          className="flex h-fit w-full flex-col gap-y-2"
        >
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-light-gray-2">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    style={{ margin: 0 }}
                    className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 bg-light-gray-1 text-white-custome focus-visible:ring-0"
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
                <FormLabel className="text-sm text-light-gray-2">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    style={{ margin: 0 }}
                    className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 bg-light-gray-1 text-white-custome focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            type="submit"
            className="relative mt-4 w-full bg-blue-500 text-dark transition duration-500 hover:bg-blue-500/80"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
      {error && (
        <p className="mt-1 text-center text-xs text-red-500">*{error}</p>
      )}
      <p className="mt-3 text-center text-xs text-light-gray-2">
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
