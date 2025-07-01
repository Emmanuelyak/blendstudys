"use client";
import React from "react";
import AdminNav from "../admin-nav";
import SimpleBar from "simplebar-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full relative 2xl:mb-0 lg:mb-0 md:mb-0 sm:mb-32">
      <div className="h-1/4">
        <AdminNav title={"Brainwave - View Subscriber"} />
      </div>

      <div className="w-100 m-auto pt-6">
        <div className="flex gap-10 mb-4">
          <div className="flex items-center gap-9">
            <h6 className="text-base">Test Taker:</h6>{" "}
            <p className="text-base">Ajoma Michelle</p>
          </div>
          <div className="flex items-center gap-11">
            <h6 className="text-base">Passed:</h6>{" "}
            <p className="text-base">89</p>
          </div>
        </div>
        <div className="flex gap-11">
          <div className="flex items-center gap-20">
            <h6 className="text-base">Test:</h6>{" "}
            <p className="text-base">The Brainwave</p>
          </div>
          <div className="flex items-center gap-14">
            <h6 className="text-base">Failed:</h6>{" "}
            <p className="text-base">11</p>
          </div>
        </div>
       
        <SimpleBar forceVisible="y" autoHide={false}  className="w-full 2xl:w-10/12 border mt-10 border-background-color h-ht-3 rounded-xl">   
        <div>
        <div>
        <div className="flex items-center justify-between p-2 lg:px-10 py-5">
          <div className="w-11/12 xl:w-6/12 lg:w-9/12 md:w-9/12">
            <div className="flex lg:gap-20">
              <div>
                <div>
                  <h6 className="py-3">Question: 1</h6>
                </div>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&lsquo;s
                  standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
              <button className="py-2 px-4 text-background-color bg-sub-bg rounded-2xl mb-2">
                Passed
              </button>
              <button className="py-2 px-4 text-background-color border-background-color text-nowrap border rounded-2xl">
                2 points
              </button>
            </div>
        </div>
        </div>
        <div className="p-2 lg:px-10 w-11/12 xl:w-8/12 lg:w-9/12 md:w-9/12">

        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        </div>
        </div>
     
        
        <div>
        <div>
        <div className="flex items-center justify-between p-2 lg:px-10 py-5">
          <div className="w-11/12 xl:w-6/12 lg:w-9/12 md:w-9/12">
            <div className="flex lg:gap-20">
              <div>
                <div>
                  <h6 className="py-3">Question: 1</h6>
                </div>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&lsquo;s
                  standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
              <button className="py-2 px-4 text-red-500 bg-inactive rounded-2xl mb-2">
                Passed
              </button>
              <button className="py-2 px-4 text-red-500 border-red-500 text-nowrap border rounded-2xl">
                2 points
              </button>
            </div>
        </div>
        </div>
        <div className="p-2 lg:px-10 w-11/12 xl:w-8/12 lg:w-9/12 md:w-9/12">

        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        <div className="flex justify-between py-5 px-10 border border-gray-600 rounded-md mb-4">
            <p>Has been the industry&lsquo;s standard dummy text ever since the 1500s.</p> <div><Image width={100} height={100} src="/checkbox.png" alt="" /></div>
        </div>
        </div>
        </div>
     
        </SimpleBar>
        </div>
    </div>
  );
}
