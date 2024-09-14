import Image from "next/image";

export default function Description() {
  return (
    <div className="relative flex h-screen w-full items-center bg-light-gray-1 px-8">
      {/* bg */}
      <div className="absolute right-0 top-0 h-56 w-44 lg:-right-8 lg:h-96 lg:w-80">
        <Image
          src="/bg/introduction/bg 2.png"
          alt="background"
          fill={true}
          className="object-scale-down"
        />
      </div>

      {/* coin */}
      <div className="absolute left-20 top-44 h-10 w-10 lg:left-[70%]">
        <Image
          src="/coin/coin-2.png"
          alt="coin-2"
          fill={true}
          className="object-cover brightness-75 grayscale"
        />
      </div>
      <div className="absolute right-24 top-56 h-16 w-16 lg:right-8">
        <Image
          src="/coin/coin-10.png"
          alt="coin-2"
          fill={true}
          className="object-cover brightness-75 grayscale"
        />
      </div>
      <div className="absolute bottom-40 left-16 h-20 w-20 lg:left-[82.5%]">
        <Image
          src="/coin/coin-9.png"
          alt="coin-2"
          fill={true}
          className="object-cover brightness-75 grayscale"
        />
      </div>

      {/* content */}
      <div className="relative z-10 lg:ml-32 lg:w-[500px]">
        <h1 className="inline-block text-xl font-bold text-white-custome lg:text-3xl">
          What is
        </h1>
        <span className="ml-1 bg-light-green px-1 text-xl font-bold text-dark lg:text-3xl">
          CrypTrack
        </span>
        <p className="mt-2 text-sm text-light-gray-2 lg:text-base">
          CrypTrack is a platform specifically designed to help you
          comprehensively analyze the cryptocurrency market. We provide the
          latest market data, and intuitive visualizations to help you make
          better investment decisions.
        </p>
      </div>
    </div>
  );
}
