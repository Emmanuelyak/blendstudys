"use client"
import Link from "next/link";
import React from "react";

export default function AdminNav(props) {
  return (
    <div className=" fixed top-0 w-full bg-transparent backdrop-blur-md lg:relative filter 2xl:w-full 2xl:relative sm:fixed md:relative md:top-0 md:pt-3 md:pb-5 z-50">
      <div className="bg-white m-0 md:m-auto rounded-xl w-10/12 2xl:w-100 md:w-11/12 top-2.5 right-0 2xl:right-20 border py-3 border-gray-100 shadow-lg">
        <div className="flex items-center justify-between 2xl:justify-between md:justify-start 2xl:w-full md:w-full">
          <div className="w-16 md:w-32 lg:w-52 2xl:w-52 2xl:flex md:flex md:justify-start 2xl:ml-10">
            <Link href="/">
              <img src="blend-studylogo.svg" alt="logo"  className="w-full"/>
            </Link>
          </div>
          <div></div>
          <div className="flex items-center lg:justify-center 2xl:justify-center md:justify-evenly text-gray-700 2xl:text-xl md:text-md 2xl:gap-20 2xl:w-90 lg:w-11/12 md:w-6/12 md:mr-2 cursor-pointer">
            <div className="text-2 text-nowrap font-semibold md:text-xl 2xl:text-2xl 2xl:font-bold">
              {props.title}
            </div>
          </div>
          <div className="w-28 lg:gap-2 2xl:w-1/4 lg:w-1/4  md:w-48 flex md:gap-2 justify-evenly 2xl:justify-evenly md:justify-evenly">
            <div className="w-3 lg:w-8">
              <img
                src="tdesign-notification-filled.png"
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-3 lg:w-8">
              <img src="vector-12.png" alt="" className="w-full" />
            </div>
            <div className="w-3 lg:w-8">
              <img src="ant-design-message-filled.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
