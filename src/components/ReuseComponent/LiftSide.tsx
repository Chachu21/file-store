import React from "react";
import Image from "next/image";

const LiftSide = () => {
  return (
    <section className=" bg-[#FA7275] text-[#FFFFFF] h-[100vh] max-w-[580px]">
      <div className="flex flex-col space-y-28 mx-[37.5px] my-[100px]">
        <Image src="/logo.svg" width={223.34} height={81.07} alt="logo" />
        <div className="flex flex-col space-y-3">
          <h1 className="text-[46px] leading-[56px] font-bold text-white">
            Manage your files the best way
          </h1>
          <p className="text-[16px] leading-6 font-normal">
            Awesome, we&apos;ve created the perfect place for you to store all
            your documents.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/Illustration.svg"
            width={342}
            height={342}
            alt="illsustration"
          />
        </div>
      </div>
    </section>
  );
};

export default LiftSide;
