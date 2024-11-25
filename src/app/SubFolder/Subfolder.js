import React from "react";

function Subfolder() {
  return (
    <div className="flex ">
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
      <div className="w-3/6 flex  mt-20 gap-5 mt-40 md:mr-4">
        <div className="2xl:w-54">
          <img  className="2xl:w-full"  src="Rectangle 1470 (1).png" alt="img1" />
        </div>
        <div  className="mt-20 2xl:w-54">
          <img className="2xl:w-full"  src="Rectangle 1471.png" alt="img2" />
        </div>
        <div className="2xl:w-54">
          <img  className="2xl:w-full" src="Rectangle 1472.png" alt="img3" />
        </div>
      </div>
    </div>
  );
}

export default Subfolder;
