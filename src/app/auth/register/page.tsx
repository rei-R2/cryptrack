import FormRegister from "@/custome_components/fragments/form_register";
import { Suspense } from "react";

export default function Register() {
  return (
    <Suspense>
      <div className="flex min-h-screen w-full items-center justify-center bg-dark py-20 lg:py-0">
        <div className="w-80 rounded-md pb-5">
          <div className="relative mb-8 w-fit rounded-tl-md py-2">
            <h1 className="mb-1 font-audiowide text-2xl text-white-custome">
              Register
            </h1>
            <p className="text-sm text-light-gray-2">create your account</p>
          </div>

          <FormRegister />
        </div>
      </div>
    </Suspense>
  );
}
