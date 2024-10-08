import type { Metadata } from "next";
import { Poppins, Audiowide } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}, ${audiowide.variable}`}>
      <body className="bg-dark">{children}</body>
    </html>
  );
}
