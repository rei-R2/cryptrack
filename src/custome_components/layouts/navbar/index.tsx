"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { back, refresh } = useRouter();
  const pathname = usePathname();
  const [intervalRefresh, setIntervalRefresh] = useState<number>(0);

  useEffect(() => {
    if (pathname === "/home") {
      setIntervalRefresh(60000);
    } else if (pathname.match(/^\/categories/)) {
      setIntervalRefresh(30000);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.match(/\/(home|categories)/)) {
      const idInterval = setInterval(() => {
        refresh();
      }, intervalRefresh);

      return () => clearInterval(idInterval);
    }
  }, [intervalRefresh, pathname, refresh]);

  return (
    <div className="fixed left-0 top-0 z-50 h-fit w-full bg-dark pt-4">
      <div className="mb-4 flex items-center justify-between px-7">
        <div className="flex items-center">
          <Button
            className={`${pathname.match(/^\/detail|profile/) ? "block" : "hidden"} mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-transparent p-1 text-white-custome transition duration-500 hover:bg-light-gray-1`}
            onClick={() => back()}
          >
            <svg
              className="-translate-x-[1px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </Button>
          <h1 className="font-audiowide text-lg text-white-custome">
            CrypTrack
          </h1>
        </div>
        <Sheet>
          <SheetTrigger
            className={`${pathname.match(/^\/profile/) && "hidden"} relative h-10 w-10 rounded-full bg-white-custome`}
          >
            <Image
              src="/photo profile.png"
              alt="photo profile"
              fill={true}
              sizes="100%"
              className="object-cover"
            />
          </SheetTrigger>
          <SheetContent className="border-light-gray-1 bg-dark px-0 text-light-gray-2">
            <SheetHeader>
              <SheetTitle className="text-white-custome">Profile</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <div className="h-40 w-full bg-gradient-to-t from-light-gray-1 from-10% to-dark" />
              <div className="relative">
                <div className="absolute -top-10 left-5">
                  <div className="relative h-20 w-20">
                    <Image
                      src="/photo profile.png"
                      alt="photo profile"
                      fill={true}
                      sizes="100%"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-white-custome">
                    Jhon Doe
                  </p>
                  <p className="text-sm text-light-gray-2">JhonDoe@gmail.com</p>
                  <div className="mt-4 flex gap-x-3">
                    <Link href="/profile">
                      <SheetClose className="flex items-center rounded-full bg-light-gray-2 px-4 py-[6px] font-semibold text-dark transition duration-500 hover:bg-light-gray-2/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square mr-2 stroke-2 text-dark"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                        edit
                      </SheetClose>
                    </Link>
                    <Button className="rounded-full bg-red-500 font-semibold text-dark transition duration-500 hover:bg-red-500/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right mr-2 stroke-2 text-dark"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                        />
                      </svg>
                      logout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div
        className={`${pathname.match(/^\/detail|profile/) ? "hidden" : "block"} navLink flex gap-x-2 overflow-x-auto pb-3 ps-7 pt-1`}
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
          className={`${pathname.match(/^\/exchange/) ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/exchange"
        >
          Exchange
        </Link>
        <Link
          className={`${pathname === "/metrics" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
          href="/metrics"
        >
          Metrics
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
