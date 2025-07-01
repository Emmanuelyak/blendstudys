import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex pt-10">
      <div className="w-3/6 flex justify-center mt-40 md:ml-8">
        <div>
          <h2 className="2xl:text-7xl md:text-4xl text-white font-semibold mt-20 leading-snug">
            Elevate Your <br />
            Study Experience!{" "}
          </h2>

          <div>
            <p className="text-white 2xl:text-3xl md:text-xl font-thin decoration-0 mb-20">
              Empowering educators and learners to achieve <br /> their goals
              together
            </p>
          </div>

          <div className="mb-5">
            <p className="text-white font-bold font-inter 2xl:text-3xl">
              Sign Up for free
            </p>
          </div>
          <div className="flex gap-5">
            <button className="bg-white px-7 py-2.5 rounded 2xl:text-2xl text-color">
              Student
            </button>{" "}
            <button className="bg-white px-7 py-2.5 rounded 2xl:text-2xl text-color">
              Parent
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/6 flex  mt-20 gap-5 md:mr-4">
        <div className="2xl:w-54">
          <Image width={100} height={100} layout="responsive" loading="lazy" className="" src="/rectangle-14701.png" alt="Image1" />
        </div>
        <div  className="mt-20 2xl:w-54">
          <Image width={100} height={100} layout="responsive" loading="lazy" className="2xl:w-full" src="/rectangle-1471.png" alt="Image2" />
        </div>
        <div className="2xl:w-54">
          <Image width={100} height={100} layout="responsive" loading="lazy" className="2xl:w-full" src="/rectangle-1472.png" alt="img3" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
