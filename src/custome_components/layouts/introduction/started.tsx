import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Started() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden font-poppins">
      <div className="flex h-1/2 w-full items-center justify-center">
        <div className="relative h-80 w-80">
          <Image
            src="/bitcoin.png"
            alt="bitcoin"
            fill={true}
            className="object-scale-down grayscale"
          />
        </div>
      </div>

      <div className="relative flex h-1/2 w-full flex-col justify-center">
        {/* bg */}
        <div className="absolute h-full w-full">
          <Image
            src="/bg/introduction/bg 1.png"
            alt="background"
            fill={true}
            className="object-cover"
          />
        </div>

        {/* containt */}
        <div className="absolute left-8 top-3 w-40">
          <p className="mb-1 text-xl font-semibold text-white-custome">
            Search
          </p>
          <p className="text-sm text-light-gray-2">
            Find out information related to the crypto you are interested in
          </p>
        </div>
        <h1 className="relative z-10 mb-4 ml-8 font-audiowide text-[40px] text-white-custome">
          CrypTrack
        </h1>
        <Link
          href={"/home"}
          className="relative z-10 ml-8 flex w-fit items-center rounded-full bg-light-green px-4 py-2 font-semibold text-dark"
        >
          Get Started{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-arrow-right-circle ml-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </Link>
        <div className="absolute bottom-10 right-8 w-40">
          <p className="mb-1 text-end text-xl font-semibold text-white-custome">
            Observe
          </p>
          <p className="text-end text-sm text-light-gray-2">
            how to gain confidence and independence through understanding the
            market
          </p>
        </div>
      </div>
    </div>
  );
}
