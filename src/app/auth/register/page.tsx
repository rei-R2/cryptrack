import FormRegister from "@/custome_components/fragments/form_register";
import { Suspense } from "react";

export default function Register() {
  return (
    <Suspense>
      <div className="flex min-h-screen w-full items-center justify-center bg-dark">
        <div className="w-72 rounded-md bg-light-gray-1 pb-5">
          <div className="relative w-fit rounded-tl-md bg-light-green px-4 py-2">
            <h1 className="font-audiowide text-lg text-dark">Register</h1>
            <div className="absolute left-full top-0 h-16 w-0.5 bg-dark" />
            <div className="absolute left-0 top-full h-0.5 w-40 bg-dark" />
          </div>

          <FormRegister />
        </div>
      </div>
    </Suspense>
  );
}
