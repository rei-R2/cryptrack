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
import { useCallback, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { getUser } from "@/utils/users";
import { DataUser } from "@/typs";

export default function Navbar() {
  const { back, refresh, push } = useRouter();
  const pathname = usePathname();
  const [intervalRefresh, setIntervalRefresh] = useState<number>(0);
  const { data } = useSession();
  const [dataUser, setDataUser] = useState<DataUser>({
    id: "",
    username: "",
    email: "",
    password: "",
    img: "",
    watchlist: [
      {
        id: 0,
        crypto_id: "",
        created_at: new Date(),
        user_id: "",
      },
    ],
  });

  const getUserById = useCallback(async () => {
    const user =
      data && (await getUser({ by: "id", value: data.user.id as string }));
    if (user?.status === 200) {
      setDataUser(user.data as DataUser);
    }
  }, [data]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

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

  useEffect(() => {
    pathname === "/home" && getUserById();
  }, [getUserById, pathname]);

  return (
    <div className="fixed left-0 top-0 z-50 h-fit w-full bg-dark pt-4 md:h-full md:w-56 md:border-r-4 md:border-light-gray-1">
      <div className="mb-4 flex items-center justify-between px-7 md:mb-5 md:items-start md:justify-between md:border-b-4 md:border-light-gray-1 md:px-5 md:pb-2">
        <div className="flex items-center">
          <Button
            className={`${pathname.match(/^\/detail|profile/) ? "flex" : "hidden"} mr-1 h-8 w-8 items-center justify-center rounded-full bg-transparent p-1 text-white-custome transition duration-500 hover:bg-light-gray-1`}
            onClick={() =>
              pathname.match(/^\/profile/) ? push("/home") : back()
            }
          >
            <svg
              // className="-translate-x-[1px]"
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
          <Link
            href={"/home"}
            className="cursor-pointer font-audiowide text-white-custome"
          >
            CrypTrack
          </Link>
        </div>

        <Sheet>
          {dataUser.img ? (
            <SheetTrigger
              className={`${pathname.match(/^\/profile/) && "hidden"} relative h-10 w-10 overflow-hidden rounded-full bg-white-custome md:h-8 md:w-8`}
            >
              <Image
                src={dataUser.img}
                alt="photo profile"
                fill={true}
                sizes="100%"
                className="object-cover"
              />
            </SheetTrigger>
          ) : (
            <SheetTrigger
              className={`${pathname.match(/^\/profile/) && "hidden"} relative h-10 w-10 overflow-hidden rounded-full bg-light-gray-1 md:h-8 md:w-8`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person-circle mx-auto text-light-gray-2 md:h-8 md:w-8"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </SheetTrigger>
          )}
          <SheetContent className="border-light-gray-1 bg-dark px-0 text-light-gray-2">
            <SheetHeader>
              <SheetTitle className="text-center text-white-custome">
                Profile
              </SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <div className="h-40 w-full bg-gradient-to-t from-light-gray-1 from-10% to-dark" />
              <div className="relative">
                <div className="absolute -top-10 left-5">
                  {dataUser.img ? (
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={dataUser.img}
                        alt="photo profile"
                        fill={true}
                        sizes="100%"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-20 w-20 overflow-hidden rounded-full bg-light-gray-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        fill="currentColor"
                        className="bi bi-person-circle mx-auto text-light-gray-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                    </div>
                  )}
                  <p className="mt-2 text-2xl font-semibold text-white-custome">
                    {dataUser.username}
                  </p>
                  <p className="text-sm text-light-gray-2">{dataUser.email}</p>
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
                    <Button
                      onClick={() => signOut()}
                      className="rounded-full bg-red-500 font-semibold text-dark transition duration-500 hover:bg-red-500/80"
                    >
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
        className={`${pathname.match(/^\/detail|profile/) ? "hidden" : "block"} navLink flex gap-x-2 overflow-x-auto px-7 pb-3 pt-1 md:w-full md:flex-col md:gap-y-2 md:px-3`}
      >
        <Link
          className={`${pathname === "/home" ? "bg-light-green px-4 text-dark md:px-[1.1rem]" : "bg-transparent px-4 text-white-custome md:px-2 md:text-light-gray-2"} flex items-center gap-x-2 rounded-full py-2 font-semibold md:w-full md:rounded-none md:px-2 md:text-sm`}
          href="/home"
          title="home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill mx-0 hidden w-5 md:block"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
          </svg>
          Home
        </Link>
        <Link
          className={`${pathname === "/watchlist" ? "bg-light-green px-4 text-dark md:px-[1.1rem]" : "bg-transparent px-4 text-white-custome md:px-2 md:text-light-gray-2"} flex items-center gap-x-2 rounded-full py-2 font-semibold md:w-full md:rounded-none md:px-2 md:text-sm`}
          href={`/watchlist?user=${data?.user.id}`}
          title="watchlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye hidden w-5 md:block"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
          </svg>
          Watchlist
        </Link>
        <Link
          className={`${pathname.match(/^\/categories/) ? "bg-light-green px-4 text-dark md:px-[1.1rem]" : "bg-transparent px-4 text-white-custome md:px-2 md:text-light-gray-2"} flex items-center gap-x-2 rounded-full py-2 font-semibold md:w-full md:rounded-none md:px-2 md:text-sm`}
          href="/categories"
          title="categories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list-ul mx-0 hidden w-5 md:block"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            />
          </svg>
          Categories
        </Link>
        <Link
          className={`${pathname.match(/^\/exchange/) ? "bg-light-green px-4 text-dark md:px-[1.1rem]" : "bg-transparent px-4 text-white-custome md:px-2 md:text-light-gray-2"} flex items-center gap-x-2 rounded-full py-2 font-semibold md:w-full md:rounded-none md:px-2 md:text-sm`}
          href="/exchange"
          title="exchange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-buildings mx-0 hidden w-5 md:block"
            viewBox="0 0 16 16"
          >
            <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
            <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
          </svg>
          Exchange
        </Link>
        <Link
          className={`${pathname === "/metrics" ? "bg-light-green px-4 text-dark md:px-[1.1rem]" : "bg-transparent px-4 text-white-custome md:px-2 md:text-light-gray-2"} flex items-center gap-x-2 rounded-full py-2 font-semibold md:w-full md:rounded-none md:px-2 md:text-sm`}
          href="/metrics"
          title="metrics"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-graph-up mx-0 hidden w-5 md:block"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
            />
          </svg>
          Metrics
        </Link>
        <Link
          className={`${pathname === "/conversion" ? "bg-light-green px-4 text-dark md:px-[1.1rem]" : "bg-transparent px-4 text-white-custome md:px-2 md:text-light-gray-2"} flex items-center gap-x-2 rounded-full py-2 font-semibold md:w-full md:rounded-none md:px-2 md:text-sm`}
          href="/conversion"
          title="conversion"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-currency-exchange mx-0 hidden w-5 md:block"
            viewBox="0 0 16 16"
          >
            <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
          </svg>
          Conversion
        </Link>
      </div>
    </div>
  );
}
