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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 z-50 h-40 w-full bg-dark px-7 py-4">
      <div className="mb-3 flex items-center justify-between">
        <h1 className="font-audiowide text-xl text-white-custome">CrypTrack</h1>
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

      <div className="navLink flex gap-x-2 overflow-x-auto">
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
          className={`${pathname === "/categories" ? "bg-light-green text-dark" : "bg-transparent text-white-custome"} rounded-full px-4 py-2 font-semibold`}
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

      <Breadcrumb className="mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
