"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const x = useSpring(200, { stiffness: 100, damping: 10 });
  const y = useSpring(200, { stiffness: 100, damping: 10 });

  const rotateX = useTransform(x, [0, 1364], [-45, 45]);
  const rotateY = useTransform(y, [0, 635], [-45, 45]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function resetToInital() {
    x.set(200, true);
    y.set(200, true);
  }

  return (
    <main className="relative h-fit w-full overflow-hidden bg-dark font-poppins">
      <div className="fixed right-0 top-0 z-50 flex h-fit w-fit items-center bg-transparent p-0 mix-blend-exclusion shadow-none md:left-0 md:top-0 md:w-full md:justify-between md:bg-dark md:px-[5.1%] md:py-2 md:mix-blend-normal md:shadow-xl md:shadow-dark">
        <div className="hidden w-full md:flex md:gap-x-10">
          <Link
            href="/home"
            title="home"
            className="text-end text-sm text-white-custome"
          >
            Home
          </Link>
          <Link
            href="/categories"
            title="categories"
            className="text-end text-sm text-white-custome"
          >
            Categories
          </Link>
          <Link
            href="/exchange"
            title="exchange"
            className="text-end text-sm text-white-custome"
          >
            Exchange
          </Link>
          <Link
            href="/metrics"
            title="metrics"
            className="text-end text-sm text-white-custome"
          >
            Metrics
          </Link>
          <Link
            href="/conversion"
            title="conversion"
            className="text-end text-sm text-white-custome"
          >
            Conversion
          </Link>
        </div>
        <div className="hidden gap-x-3 md:flex">
          <Link
            href="/auth/register"
            title="register"
            className="h-fit rounded-full border-2 border-light-green px-4 py-1 text-sm text-white md:text-base"
          >
            register
          </Link>
          <Link
            href="/auth/login"
            title="login"
            className="h-fit rounded-full border-2 border-light-green bg-light-green px-4 py-1 text-sm font-semibold text-dark md:text-base"
          >
            login
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="flex h-14 w-14 items-center justify-center font-bold text-light-green md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list text-white-custome"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-center border-none bg-light-gray-1">
            <SheetClose className="absolute right-3 top-3 bg-light-gray-1 p-3">
              <svg
                className="h-6 w-6 text-white-custome"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </SheetClose>
            <div className="flex w-full flex-col gap-y-5">
              <Link
                href="/home"
                title="home"
                className="text-end text-lg text-white-custome md:text-sm"
              >
                Home
              </Link>
              <Link
                href="/categories"
                title="categories"
                className="text-end text-lg text-white-custome md:text-sm"
              >
                Categories
              </Link>
              <Link
                href="/exchange"
                title="exchange"
                className="text-end text-lg text-white-custome md:text-sm"
              >
                Exchange
              </Link>
              <Link
                href="/metrics"
                title="metrics"
                className="text-end text-lg text-white-custome md:text-sm"
              >
                Metrics
              </Link>
              <Link
                href="/conversion"
                title="conversion"
                className="text-end text-lg text-white-custome md:text-sm"
              >
                Conversion
              </Link>
            </div>
            <div className="mt-5 flex justify-end gap-x-3">
              <Link
                href="/auth/register"
                title="register"
                className="h-fit rounded-full border-2 border-light-green px-4 py-1 text-sm text-white md:text-base"
              >
                register
              </Link>
              <Link
                href="/auth/login"
                title="login"
                className="h-fit rounded-full border-2 border-light-green bg-light-green px-4 py-1 text-sm font-semibold text-dark md:text-base"
              >
                login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center md:h-[60vh] md:flex-row lg:h-screen">
        <div className="absolute left-6 top-20 z-10 w-40 md:left-[38.4%] md:top-24 md:w-52">
          <p className="mb-1 text-base font-semibold text-white-custome md:text-xl">
            Search
          </p>
          <p className="text-xs text-light-gray-2 md:text-sm">
            Find out information related to the crypto you are interested in
          </p>
        </div>

        <div className="relative z-10 h-[40%] w-full pl-6 md:h-fit md:pl-[5.1%]">
          <h1 className="mb-3 font-audiowide text-3xl text-white-custome md:text-[40px]">
            CrypTrack
          </h1>
          <p className="mb-5 w-full text-xs text-light-gray-2 md:w-2/3 md:text-base">
            CrypTrack is a platform specifically designed to help you
            comprehensively analyze the cryptocurrency market.
          </p>
          <Link
            href={"/home"}
            className="flex w-fit items-center rounded-full bg-light-green px-4 py-2 font-medium text-dark"
          >
            Get Started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
        </div>

        <div className="order-first flex h-[60%] w-full items-center md:order-last md:h-fit">
          <div className="relative z-20 mx-auto mt-16 h-72 w-72 md:mt-0 md:h-96 md:w-96">
            <Image
              src="/bitcoin.png"
              alt="bitcoin"
              fill={true}
              className="object-scale-down grayscale"
            />
          </div>
        </div>

        <div className="absolute bottom-10 right-2 w-40 md:bottom-10 md:w-56">
          <p className="mb-1 text-end text-base font-semibold text-white-custome md:text-xl">
            Observe
          </p>
          <p className="text-end text-xs text-light-gray-2 md:text-sm">
            how to gain confidence and independence through understanding the
            market
          </p>
        </div>

        <div className="absolute left-[5%] h-full w-0.5 bg-light-gray-1" />
        <div className="absolute left-[55%] h-full w-0.5 bg-light-gray-1 md:left-[38.2%]" />
        <div className="absolute left-[71.5%] hidden h-full w-0.5 bg-light-gray-1 md:block" />
        <div className="absolute bottom-5 left-0 h-0.5 w-full bg-light-gray-1" />
      </div>

      <div className="relative grid h-fit w-full grid-cols-1 gap-y-8 pb-40 md:grid-cols-3 md:gap-y-0">
        <div className="relative flex w-full items-center px-[6%] md:px-[15.2%]">
          <div className="relative z-10 md:w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-hourglass-split mb-2 text-light-green"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>
            <h1 className="text-base font-semibold text-white-custome md:text-xl">
              Real Time <br /> Market Analysis
            </h1>
            <p className="mt-2 text-xs text-light-gray-2 md:mt-4 md:text-base">
              Get live cryptocurrency market information with updated data on
              prices, volume, and price changes. Monitor your favorite assets
              and make decisions based on the latest data.
            </p>
          </div>
        </div>

        <div className="relative flex w-full items-center px-[6%] md:px-[15.2%]">
          <div className="relative z-10 flex flex-col md:w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-bar-chart-line text-light-green"
              viewBox="0 0 16 16"
            >
              <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
            </svg>
            <h1 className="text-lg font-semibold text-white-custome md:mb-2 md:text-xl">
              Interactive Charts <br /> and Visualizations
            </h1>
            <p className="mt-2 text-xs text-light-gray-2 md:text-base">
              Enjoy interactive price charts that allow you to analyze market
              movements with various technical indicators. From simple trend
              lines to complex candlestick analysis, everything is available on
              CrypTrack.a.
            </p>
          </div>
        </div>

        <div className="relative flex w-full items-center px-[6%] md:px-[15.2%]">
          <div className="relative z-10 md:w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-currency-exchange text-light-green"
              viewBox="0 0 16 16"
            >
              <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
            </svg>
            <h1 className="text-base font-semibold text-white-custome md:text-xl">
              Instant Currency <br /> Conversion
            </h1>
            <p className="mt-2 text-xs text-light-gray-2 md:mt-4 md:text-base">
              Compare cryptocurrency prices in various fiat and crypto
              currencies. With flexible conversion features, you can view asset
              values in the currency most relevant to you.
            </p>
          </div>
        </div>

        <div className="absolute left-[5%] h-full w-0.5 bg-gradient-to-b from-light-gray-1 to-dark" />
        <div className="absolute left-[55%] h-full w-0.5 bg-gradient-to-b from-light-gray-1 to-dark md:left-[38.2%]" />
        <div className="absolute left-[71.5%] hidden h-full w-0.5 bg-gradient-to-b from-light-gray-1 to-dark md:block" />
      </div>

      <motion.div
        className="relative h-screen w-full md:h-[50vh] lg:h-screen"
        style={{
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          perspective: 400,
        }}
        onMouseMove={handleMouse}
        onMouseLeave={resetToInital}
      >
        <div className="absolute left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 px-5 md:w-1/2 lg:w-1/3">
          <h1 className="mb-4 text-center text-base font-semibold text-white-custome md:text-xl">
            Get Started Now
          </h1>
          <p className="mx-auto mt-2 text-center text-sm text-light-gray-2">
            Sign up now for access to CryptTrack features. Don`t miss the
            opportunity to better understand the cryptocurrency market and
            enhance your investment strategy.
          </p>
        </div>
        <motion.div
          className="relative h-screen w-full md:h-[50vh] lg:h-screen"
          style={{
            borderRadius: 30,
            x: rotateX,
            y: rotateY,
          }}
        >
          <div className="absolute left-[16%] top-[40%] h-11 w-11 md:top-[45%] md:h-14 md:w-14">
            <Image
              src="/coin/coin-1.png"
              alt="coin-1"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute left-[30%] top-[65%] h-10 w-10">
            <Image
              src="/coin/coin-2.png"
              alt="coin-2"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute left-[45%] top-[30%] h-14 w-14 md:left-[40%] md:top-[25%] md:h-16 md:w-16">
            <Image
              src="/coin/coin-3.png"
              alt="coin-3"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute left-[55%] top-[70%] h-14 w-14 md:top-[75%] md:h-16 md:w-16">
            <Image
              src="/coin/coin-8.png"
              alt="coin-8"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute left-[80%] top-[35%] h-12 w-12 md:left-[65%] md:h-14 md:w-14">
            <Image
              src="/coin/coin-9.png"
              alt="coin-9"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute left-[80%] top-[60%] h-12 w-12 md:h-10 md:w-10">
            <Image
              src="/coin/coin-10.png"
              alt="coin-10"
              fill={true}
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="flex h-14 w-full items-center justify-center bg-light-gray-1">
        <p className="text-center text-xs text-light-gray-2 md:text-sm">
          © 2024 cryptotrsck. All Rights reserved
        </p>
      </div>
    </main>
  );
}
