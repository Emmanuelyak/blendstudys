import Link from "next/link";
import React from "react";

function Navigation(props) {
 
  return (

    <div className="bg-transparent filter w-full fixed top-0 pt-5 pb-10">
      <div  className="bg-white p-2.5 m-auto rounded-xl w-9/12 top-2.5 2xl:right-20 shadow-lg">
      <div className="flex items-center 2xl:justify-between md:justify-start 2xl:w-w-main md:w-full ">
      <div className="lg:max-w-52 2xl:w-1/4  2xl:flex md:w-1/5 sm:w-1/6 md:flex md:justify-start md:w-38 2xl:ml-10">
        <Link href="/">
          <img src="BlendStudylogo.svg" alt="logo" />
        </Link>
      </div>
      <div></div>
      <div className="flex items-center lg:justify-center 2xl:justify-center md:justify-evenly  text-gray-700 2xl:text-xl md:text-md 2xl:gap-20 2xl:w-90 lg:w-11/12 md:w-6/12 md:mr-2 cursor-pointer">
        <div
          className={`text-black  2xl:text-xl lg:text-md md:text-sm sm:text-sm `}
        >
          <Link href="/services">{props.option}</Link>
        </div>
        <div
          className={`${
            props.name === "Home" ? "text-black" : ""
          }   2xl:text-xl lg:text-md md:text-sm `}
        >
          About Us
        </div>
        <div className="2xl:text-xl lg:text-md md:text-sm">Features</div>
      
        <div
          className={`2xl:text-xl md:text-sm flex items-center 2xl:gap-5 md:gap-1`}
        >
       <span  className={`${props.name === "Are you a teacher?" ? "flex" : "hidden"}  `}> <img className="md:w-9 2xl:w-16" src="Group 237876.png" alt="pic" /></span> {props.name}
        </div>
      </div>
      <div className="lg:gap-2 2xl:w-1/4 lg:w-2/4  md:w-48 flex md:gap-2 2xl:justify-end">
        <div>
        
          <button className="2xl:py-2.5 2xl:px-10 lg:py-2.5 lg:px-5 md:px-5 md:text-sm md:py-1 rounded-md text-black border border-color text-nowrap font-inter">
            Sign Up
          </button>
        </div>
        <div>
          <button className="text-white border border-color bg-background-color 2xl:py-2.5 2xl:px-10 lg:py-2.5 lg:px-5 md:px-5 md:text-sm md:py-1 rounded-md text-nowrap">
            Log In
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>


    
  );
}

export default Navigation;
