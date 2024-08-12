"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 z-50 h-fit w-full bg-dark py-4">
      <div className="mb-3 flex items-center justify-between px-7">
        <div className="flex items-center">
          <Link
            href={"/home"}
            className={`${pathname.match(/^\/detail/) ? "block" : "hidden"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left mr-1 rounded-full p-1 text-white-custome transition duration-500 hover:bg-light-gray-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </Link>
          <h1 className="font-audiowide text-xl text-white-custome">
            CrypTrack
          </h1>
        </div>
        <Sheet>
          <SheetTrigger className="relative h-12 w-12 rounded-full bg-white-custome">
            <Image
              src="/photo profile.png"
              alt="photo profile"
              fill={true}
              sizes="100%"
              className="object-cover"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div
        className={`${pathname.match(/^\/detail/) ? "hidden" : "block"} navLink flex gap-x-2 overflow-x-auto ps-7`}
      >
        <Link
          className={`${pathname === "/home" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/home"
        >
          Home
        </Link>

        <Link
          className={`${pathname === "/watchlist" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/watchlist"
        >
          Watchlist
        </Link>
        <Link
          className={`${pathname.match(/^\/categories/) ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/categories"
        >
          Categories
        </Link>
        <Link
          className={`${pathname === "/exchange" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/exchange"
        >
          Exchange
        </Link>
        <Link
          className={`${pathname === "/metrics" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/metrics"
        >
          Mestrics
        </Link>
        <Link
          className={`${pathname === "/conversion" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/conversion"
        >
          Conversion
        </Link>
      </div>
    </div>
  );
}
