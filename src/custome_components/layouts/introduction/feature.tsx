import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="relative flex h-screen w-full items-center px-8">
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-hourglass-split mb-2 text-light-green"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
          </svg>
          <h1 className="text-xl font-semibold text-white-custome">
            Real Time <br /> Market Analysis
          </h1>
          <p className="mt-2 text-sm text-light-gray-2">
            Get live cryptocurrency market information with updated data on
            prices, volume, and price changes. Monitor your favorite assets and
            make decisions based on the latest data.
          </p>
        </div>
        <div className="absolute left-6 top-0 h-screen w-0.5 bg-light-gray-1" />
        <div className="absolute right-0 top-1/2 h-0.5 w-screen translate-y-3 bg-light-gray-1" />
        <div className="absolute right-0 top-1/2 h-[106px] w-[106px] translate-y-3 bg-light-gray-1" />
      </div>

      <div className="relative flex h-screen w-fit items-center bg-light-gray-1 px-8">
        <div className="relative z-10 flex flex-col items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-bar-chart-line text-light-green"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
          </svg>
          <h1 className="text-end text-xl font-semibold text-white-custome">
            Interactive Charts <br /> and Visualizations
          </h1>
          <p className="mt-2 text-end text-sm text-light-gray-2">
            Enjoy interactive price charts that allow you to analyze market
            movements with various technical indicators. From simple trend lines
            to complex candlestick analysis, everything is available on
            CrypTrack.a.
          </p>
        </div>
        <div className="absolute right-6 top-0 h-screen w-0.5 bg-dark" />
        <div className="absolute right-0 top-1/2 h-0.5 w-screen -translate-y-1 bg-dark" />
        <div className="absolute -right-20 bottom-1/2 h-[106px] w-[106px] -translate-y-1 bg-dark" />
        <div className="absolute right-6 top-1/2 h-[106px] w-[106px] -translate-y-0.5 bg-dark" />
      </div>

      <div className="relative flex h-screen w-fit items-center px-8">
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-currency-exchange text-light-green"
            viewBox="0 0 16 16"
          >
            <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
          </svg>
          <h1 className="text-xl font-semibold text-white-custome">
            Instant Currency <br /> Conversion
          </h1>
          <p className="mt-2 text-sm text-light-gray-2">
            Compare cryptocurrency prices in various fiat and crypto currencies.
            With flexible conversion features, you can view asset values in the
            currency most relevant to you.
          </p>
        </div>
        <div className="absolute left-6 top-0 h-screen w-0.5 bg-gradient-to-b from-light-gray-1" />
        <div className="absolute right-0 top-1/2 h-0.5 w-screen translate-y-2 bg-light-gray-1" />
        <div className="absolute -left-20 bottom-1/2 h-[106px] w-[106px] translate-y-2 bg-light-gray-1" />
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-8">
        <div className="mb-14">
          <h1 className="mb-5 text-center text-xl font-semibold text-white-custome">
            Crypto
          </h1>
          <div className="flex w-full">
            <IconCrypto />
            <IconCrypto />
          </div>
        </div>
        <div className="">
          <h1 className="mb-5 text-center text-xl font-semibold text-white-custome">
            Get Started Now
          </h1>
          <p className="mt-2 text-center text-sm text-light-gray-2">
            Sign up now for access to CryptTrack features. Don`t miss the
            opportunity to better understand the cryptocurrency market and
            enhance your investment strategy.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center bg-light-gray-1">
          <p className="text-center text-sm text-light-gray-2">
            © 2024 cryptotrsck. All Rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

function IconCrypto() {
  return (
    <div className="flex w-fit animate-marquee gap-x-3 px-[6px]">
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-1.png"
          alt="coin-1"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-2.png"
          alt="coin-2"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-3.png"
          alt="coin-3"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-4.png"
          alt="coin-4"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-5.png"
          alt="coin-5"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-6.png"
          alt="coin-6"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-7.png"
          alt="coin-7"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-8.png"
          alt="coin-8"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-9.png"
          alt="coin-9"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative h-12 w-12">
        <Image
          src="/coin/coin-10.png"
          alt="coin-10"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
}
