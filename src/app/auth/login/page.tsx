import { Suspense } from "react";
import FormLogin from "@/custome_components/fragments/form_login";

export default function Login() {
  return (
    <Suspense>
      <div className="flex min-h-screen w-full items-center justify-center bg-dark">
        <div className="w-72 rounded-md border border-light-gray-1 bg-light-gray-1 pb-5">
          <div className="relative w-fit rounded-tl-md bg-light-green px-4 py-2">
            <h1 className="font-audiowide text-lg text-dark">Login</h1>
            <div className="absolute left-full top-0 h-16 w-0.5 bg-dark" />
            <div className="absolute left-0 top-full h-0.5 w-32 bg-dark" />
          </div>

          <FormLogin />
        </div>
      </div>
    </Suspense>
  );
}
