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

const formSchema = z.object({
  username: z.string().min(2).max(250),
  email: z.string().min(6).max(250),
  password: z.string().min(8).max(12),
  confirmPassword: z.string().min(8).max(12),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit } = form;

  const handleRegister = handleSubmit((value) => {
    console.log(value);
  });

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-dark">
      <div className="w-72 rounded-md bg-light-gray-1 pb-5">
        <div className="relative w-fit rounded-tl-md bg-light-green px-4 py-2">
          <h1 className="font-audiowide text-lg text-dark">Register</h1>
          <div className="absolute left-full top-0 h-16 w-0.5 bg-dark" />
          <div className="absolute left-0 top-full h-0.5 w-40 bg-dark" />
        </div>

        <div className="mt-5 px-5">
          <Form {...form}>
            <form
              onSubmit={handleRegister}
              className="flex h-fit w-full flex-col gap-y-2"
            >
              <FormField
                name="username"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-light-gray-2">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        style={{ margin: 0 }}
                        className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 bg-light-gray-1 text-white-custome focus-visible:ring-0"
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
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-light-gray-2">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        style={{ margin: 0 }}
                        className="rounded-none border-x-0 border-b-[1px] border-t-0 border-light-gray-2 bg-light-gray-1 text-white-custome focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-dark transition duration-500 hover:bg-blue-500/80"
              >
                Register
              </Button>
            </form>
          </Form>
          <p className="mt-3 text-center text-xs text-light-gray-2">
            Already have an account?{" "}
            <Link
              href={"/auth/login"}
              className="underline decoration-light-green underline-offset-1"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
