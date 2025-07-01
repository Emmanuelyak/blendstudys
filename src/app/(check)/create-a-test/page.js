"use client";
import React from "react";
import AdminNav from "../../../components/admin-nav";
import { Dropdown } from "rsuite";
import Image from "next/image";

export default function CreateTest() {
  return (
    <div className="w-full relative">
      <div className="h-1/4">
        <AdminNav title={"Test Room - Brainwave"} />
      </div>
      <div className="w-11/12 lg:w-10/12 2xl:w-11/12 m-auto pt-24 lg:pt-32 2xl:pt-36">
        <div className="flex justify-between items-start 2xl:items-center">
          <div>
            <Dropdown title={"Question Type"} className="dropdown3"></Dropdown>
          </div>
          <div className="flex flex-col lg:flex gap-1 lg:justify-between 2xl:flex 2xl:flex-row lg:flex-row 2xl:gap-10">
            <Dropdown
              title={"Difficulty Level"}
              className="dropdown3"
            ></Dropdown>
            <Dropdown
              title={"Points"}
              className="dropdown3 dropdown4"
            ></Dropdown>{" "}
            <div className="bg-background-color flex p-2 rounded gap-1 text-white">
              Time: 00:30s{" "}
              <Image width={100} height={100} src="vector-20.png" alt="" />
            </div>
          </div>
        </div>

        <div className="relative mt-10">
          <label htmlFor="">Enter Question</label>
          <textarea
            name=""
            id=""
            className="w-full h-40 bg-gray-300 rounded p-3 mt-1 outline-none"
            placeholder="Type Your Question Here"
          ></textarea>

          <div className="absolute bottom-3 left-[66%] md:left-[78%] lg:left-[80%] 2xl:left-[92%]">
            <div className="flex gap-5">
              <Image
                width={100}
                height={100}
                src="ph-file-text-bold.png"
                alt=""
              />
              <Image
                width={100}
                height={100}
                src="ic-baseline-image.png"
                alt=""
              />
              <Image
                width={100}
                height={100}
                src="fa6-solid-video.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  2xl:grid-cols-2 lg:grid-cols-2 gap-5 2xl:gap-24 lg:gap-24 mb-6 mt-5">
          <div>
            <div className="flex justify-between">
              <label htmlFor="">Choice 1</label>
              <div>
                <Image
                  width={100}
                  height={100}
                  src="weui-delete-filled.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-200 rounded w-full p-3 my-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-background-color w-3 h-3"></span>
              <p>This is the correct answer</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="">Choice 2</label>
              <div>
                <Image
                  width={100}
                  height={100}
                  src="weui-delete-filled.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-200 rounded w-full p-3 my-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-background-color w-3 h-3"></span>
              <p>This is the correct answer</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  2xl:grid-cols-2 lg:grid-cols-2 gap-5 2xl:gap-24 lg:gap-24">
          <div>
            <div className="flex justify-between">
              <label htmlFor="">Choice 1</label>
              <div>
                <Image
                  width={100}
                  height={100}
                  src="weui-delete-filled.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-200 rounded w-full p-3 my-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-background-color w-3 h-3"></span>
              <p>This is the correct answer</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="">Choice 2</label>
              <div>
                <Image
                  width={100}
                  height={100}
                  src="weui-delete-filled.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-200 rounded w-full p-3 my-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-background-color w-3 h-3"></span>
              <p>This is the correct answer</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-20">
          <div className="flex gap-10 mb-10 2xl:mb-0 lg:mb-0 2xl:gap-32 lg:gap-32">
            <button className="bg-background-color py-3 px-5 rounded text-white text md">
              <span className="text-lg">+</span> Add Choice
            </button>
            <button className="bg-background-color py-3 px-10 rounded text-white text md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
