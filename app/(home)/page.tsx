import { DownloadButton } from "@/components";
import Image from "next/image";

export default function Home() {
  const age = new Date().getFullYear() - new Date(2005, 8, 20).getFullYear();

  return (
    <div className="lg:flex lg:justify-between w-full h-[70vh] max-md:flex-col container">
      <Image
        src={"/images/khaby.webp"}
        alt="not loaded"
        width={350}
        height={300}
        className="lg:hidden flex select-none pointer-events-none"
      />

      {/* Content */}
      <div className="flex flex-col justify-center w-1/2 mt-[5%] max-md:w-full max-md:mt-[-5%]">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-medium leading-10 max-md:text-center max-md:text-2xl">
            <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text  text-transparent">
              Greetings from {""}
            </span>
            <span className="font-bold custom_gradient">
              cReaTiVe Full Stack Javascript devEloper
            </span>
          </h1>

          <p className="text-xl leading-normal text-neutral-700 max-md:text-lg max-md:text-center">
            Hi, my name is{" "}
            <b className="font-medium">Jur'atbek Xudayberganov</b> and I am{" "}
            {age} {""}
            years old. You can learn more about my works and contact me through
            this website!
          </p>

          <div className="flex justify-start ">
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* Portfolio person image */}
      <div className="w-1/2 flex justify-center items-center mt-[15%] max-md:hidden">
        <Image
          src={"/images/my_image.png"}
          alt="image not loaded"
          width={280}
          height={240}
          className="object-contain ml-20"
        />
      </div>
    </div>
  );
}
