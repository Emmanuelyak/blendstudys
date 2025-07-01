"use client";
import React from "react";
import AdminNav from "../admin-nav";
import { Dropdown } from "rsuite";
import Image from "next/image";

function page() {
  return (
    <div className="w-full relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Manage Test - Chemistry"} />
      </div>

      <div className="w-11/12 md:w-11/12 lg:w-100 2xl:w-100 m-auto mt-5 2xl:pt-10 ">
        <div className="flex justify-between">
          <button className="bg-background-color text-white py-4 px-4 2xl:py-4 flex items-end gap-4 2xl:px-10 text-base 2xl:text-lg rounded">
            <span className="text-sm 2xl:text-2xl">+</span>Add Resources
          </button>
          <button className="bg-background-color text-white py-4 px-4 2xl:py-4 flex items-end gap-4 2xl:px-10 text-base 2xl:text-lg rounded ">
            <span className="text-sm 2xl:text-2xl">+</span>Create Question
          </button>
        </div>

        <div className="grid grid-cols-1 lg:flex 2xl:flex gap-8 mt-5">
          <div className="w-full 2xl:w-4/12 lg:w-4/12">
            <div className="bg-sub-bg px-10 py-8 rounded">
              <h6 className="pb-5">Test Room Description</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500sLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s...
              </p>
            </div>
            <div className=" mt-10">
              <h6>Knowledge Level</h6>
              <div className="flex gap-2 items-center pt-2 pb-2">
                <input className="w-4 h-5" type="checkbox" name="" id="" />{" "}
                <p className="text-lg">Basic</p>
              </div>
              <div className="flex gap-2 items-center pb-2">
                <input className="w-4 h-5" type="checkbox" name="" id="" />{" "}
                <p className="text-lg">Intermediate</p>
              </div>
              <div className="flex gap-2 items-center pb-2">
                <input className="w-4 h-5" type="checkbox" name="" id="" />{" "}
                <p className="text-lg">Advanced</p>
              </div>
            </div>
            <div className=" mt-10">
            <h6>Resources Attached</h6>

            <div className="flex">
              <div className="w-6/12">
                <Image width={100} height={100} src="/frame-1707478555.png" alt="" />
              </div>
              <div className="w-6/12">
                <Image width={100} height={100} src="/frame-1707478556.png" alt="" />
                </div>
            </div>
          </div>
          </div>
          <div className="w-full lg:flex-1 2xl:flex-1 border-2 border-gray-200 rounded">
            <div>
              <div className="border-2 border-collapse gap-8 lg:gap-14 2xl:gap-20 border-gray-200 flex items-center px-10 py-2">
                {" "}
                <h6 className="text-nowrap">Question: 1</h6> <h6>10pts</h6> <h6>1mins</h6>{" "}
                <h6>
                  {" "}
                  <Dropdown
                    title="&#9679; &#9679; &#9679;"
                    noCaret
                    className="bg-gray-100 dropdown2"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </h6>{" "}
              </div>
              <h6 className="px-10 py-3">
                1500sLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </h6>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
            </div>
            <div>
              <div className="border-2 border-collapse gap-8 lg:gap-14 2xl:gap-20 border-gray-200 flex items-center px-10 py-2">
                {" "}
                <h6 className="text-nowrap">Question: 1</h6> <h6>10pts</h6> <h6>1mins</h6>{" "}
                <h6>
                  {" "}
                  <Dropdown
                    title="&#9679; &#9679; &#9679;"
                    noCaret
                    className="bg-gray-100 dropdown2"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </h6>{" "}
              </div>
              <h6 className="px-10 py-6">
                1500sLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </h6>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
            </div>
            <div>
              <div className="border-2 border-collapse gap-8 lg:gap-14 2xl:gap-20 border-gray-200 flex items-center px-10 py-2">
                {" "}
                <h6 className="text-nowrap">Question: 1</h6> <h6>10pts</h6> <h6>1mins</h6>{" "}
                <h6>
                  {" "}
                  <Dropdown
                    title="&#9679; &#9679; &#9679;"
                    noCaret
                    className="bg-gray-100 dropdown2"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </h6>{" "}
              </div>
              <h6 className="px-10 py-6">
                1500sLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </h6>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
              <div className="flex px-10 items-center gap-5 pb-5">
                <span className="bg-background-color w-5 h-4"></span>
                <p>
                  Has been the industry's standard dummy text ever since the
                  1500s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 flex items-center pb-2 pt-10  m-auto gap-6">
      <div className="2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-10 text-sm 2xl:text-lg lg:text-lg w-4/12">
          Show <span className="font-bold">1</span> to
          <span className="font-bold">10</span> of
          <span className="font-bold">20</span> results
        </div>

        <div className="flex-1">

        <div className="flex items-center">
          &lt;
          <div className="grid grid-cols-7 items-center gap-3 mx-2">
            <div className="bg-background-color flex justify-center items-center px-3 rounded-md py-2 text-white">
              1
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>
              <Image width={100} height={100} src="/vector-17.png" alt="" />
            </div>
            <div>10</div>
            <div>11</div>
          </div>
          &gt;
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;
