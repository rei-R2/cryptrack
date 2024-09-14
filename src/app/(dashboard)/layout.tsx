"use client";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/custome_components/layouts/navbar";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dark lg:h-screen lg:overflow-hidden">
      <SessionProvider>
        <Navbar />
        {children}
        <Toaster />
      </SessionProvider>
    </div>
  );
}
