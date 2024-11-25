"use client";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

function Navigation(props) {
  const tabView = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="flex items-center 2xl:justify-center md:gap-6 2xl:w-w-main md:w-full ">
      <div className="2xl:w-48  2xl:flex md:w-1/5 sm:w-1/6 md:flex md:justify-start md:w-38 2xl:ml-10">
        <Link href="/">
          <img src="BlendStudylogo.svg" alt="logo" />
        </Link>
      </div>
      <div></div>
      <div className="flex items-center justify-center  text-gray-700 2xl:text-xl md:text-md 2xl:gap-20 md:gap-5 2xl:w-5/6 lg:w-11/12  cursor-pointer">
        <div
          className={`${
            props.name === "Home" ? "hidden" : "flex"
          } text-black  2xl:text-xl lg:text-md md:text-sm sm:text-sm sm:w-28`}
        >
          <Link href="/services">Services</Link>
        </div>
        <div
          className={`${
            props.name === "Home" ? "text-black" : ""
          }   2xl:text-xl lg:text-md md:text-sm`}
        >
          About Us
        </div>
        <div className=" 2xl:text-xl lg:text-md md:text-sm ">Features</div>
        {!tabView ? (
          <div
            className={`${props.name === "Home" ? "flex" : "hidden"}   sm:w-20`}
          >
            <img src="Group 237876.png" alt="pic" />
          </div>
        ) : null}
        <div
          className={`${
            props.name === "Home" ? "flex" : "hidden"
          } 2xl:text-xl md:text-sm `}
        >
          Are you a teacher?
        </div>
      </div>
      <div className="lg:gap-2 2xl:w-1/4 lg:w-2/4  md:w-50 flex md:gap-2  2xl:justify-end">
        <div>
          {" "}
          <button className="2xl:py-2.5 2xl:px-10 lg:py-2.5 lg:px-5 md:px-5 md:text-md md:py-1 rounded-md text-black border border-color">
            Sign Up
          </button>
        </div>
        <div>
          {" "}
          <button className="text-white bg-background-color 2xl:py-2.5 2xl:px-10 md:text-md lg:px-10 md:py-1 md:px-5 rounded-md">
            Log IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
