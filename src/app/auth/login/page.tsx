import { Suspense } from "react";
import FormLogin from "@/custome_components/fragments/form_login";

export default function Login() {
  return (
    <Suspense>
      <div className="flex min-h-screen w-full items-center justify-center bg-dark">
        <div className="w-80 rounded-md pb-5">
          <div className="relative mb-8 w-fit rounded-tl-md py-2">
            <h1 className="mb-1 font-audiowide text-2xl text-white-custome">
              Login
            </h1>
            <p className="text-sm text-light-gray-2">login your account</p>
          </div>

          <FormLogin />
        </div>
      </div>
    </Suspense>
  );
}
