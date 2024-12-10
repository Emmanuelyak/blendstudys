"use client";
import React from "react";
import AdminNav from "../admin-nav";
import { Dropdown, IconButton } from "rsuite";
import { FiMoreVertical } from "react-icons/fi";

export default function ManageTestRooms() {
  const icon = `<div className="flex flex-col gap-1">&#9679;&#9679;&#9679;</div>`;
  console.log(icon);
  return (
    <div className="relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Manage Test - Chemistry"} />
      </div>
      <div className=" w-100 m-auto pt-20 lg:pt-16 2xl:pt-10">
        <div className="flex flex-col md:flex-col lg:flex-col xl:flex 2xl:flex xl:flex-row 2xl:flex-row justify-between">
          <div className="order-1 flex justify-start">
            <p className="md:text-sm font-semibold  2xl:font-extrabold text-nowrap">
              Test Room <span>(20)</span>
            </p>
          </div>
          <div className="flex gap-3 order-2 justify-end">
            <div className="bg-gray-200 flex items-center rounded-md">
              <div className="rounded-l-md hover:bg-gray-400 py-4  pl-2 pr-2 transition-colors ease-linear duration-150">
                <div className="w-5 cursor-pointer">
                  <img src="search.png" alt="search" width={"100%"} />
                </div>
              </div>
              <div className=" 2xl:w-64">
                <input
                  className="py-4 w-full bg-transparent outline-none cursor-pointer"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div>
              <button className="bg-gray-200 flex py-4 gap-4 pl-2 pe-2 pr-10 rounded">
                <div className="w-4">
                  <img src="funnel.png" alt=""  width={"100%"}/>
                </div>{" "}
                Filter
              </button>
            </div>
            <div>
              <button className="py-4 px-5 bg-gray-200 rounded-md">
                {" "}
                <div className="w-5">
                  <img src="layout-11.png" alt="layout" width={"100%"} />
                </div>
              </button>
            </div>
            <div>
              <button className="py-4 px-5 bg-sub-bg rounded-md">
                {" "}
                <div className="w-5">
                  <img src="bullet-list-67.png" alt="layout" width={"100%"} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded border-collapse ">
          <table className="w-full m-auto border-collapse border-gray-400 ">
            <thead>
              <tr className="bg-gray-100">
                <td className="w-[18%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 text-nowrap border-gray-400  border">
                  Test Room Name
                </td>
                <td className="w-[18%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                  Status
                </td>
                <td className="w-[18%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                  Date
                </td>
                <td className="w-[18%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                  Test
                </td>
                <td className="w-[18%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                  Subscribers
                </td>
                <td className="w-[10%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border"></td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-black p-5 border 2xl:text-base md:text-2 border-gray-400">
                  Brainwave Room
                </td>
                <td className="text-color p-5 border 2xl:text-base md:text-2 border-gray-400">
                  Active
                </td>
                <td className="text-black p-5 border 2xl:text-base md:text-2 border-gray-400">
                  10/01/2024
                </td>
                <td className="text-black p-5 border 2xl:text-base md:text-2 text-nowrap border-gray-400">4</td>
                <td className="text-black p-5 border 2xl:text-base border-gray-400 md:text-2 text-nowrap">
                  20 Subscribers
                </td>
                <td className="text-black py-5 lg:justify-center md:px-5 border border-gray-400">
                    <div className="flex justify-center">
                  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                    </div>
                </td>
              </tr>
              <tr>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                  Brainwave Room
                </td>
                <td className="text-color p-5 border md:text-2 2xl:text-base  border-gray-400">
                  Active
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                  10/01/2024
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">4</td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  20 Subscribers
                </td>
                <td className="text-black py-5 md:px-5 border border-gray-400">
                <div className="flex justify-center">
                  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                    </div>
                </td>
              </tr>
              <tr>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  Brainwave Room
                </td>
                <td className="text-red-500 p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  Inactive
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  10/01/2024
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">4</td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  20 Subscribers
                </td>
                <td className="text-black py-5 md:px-5 border border-gray-400">
                <div className="flex justify-center">
                  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                    </div>
                </td>
              </tr>
              <tr>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  Brainwave Room
                </td>
                <td className="text-red-500 p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  Inactive
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  10/01/2024
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">4</td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  20 Subscribers
                </td>
                {/* <td  className="text-black py-5 2xl:px-16 lg:px-16 md:px-5 border border-gray-400"><img src="create.png" alt="" /></td> */}
                <td className="text-black py-5 md:px-5 border border-gray-400">
                <div className="flex justify-center">
                  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                    </div>  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        <div className="w-100 flex items-center pb-2 pt-10  m-auto gap-6">
      <div className="2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-10 text-sm text-nowrap 2xl:text-lg lg:text-lg w-4/12">
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
              <img src="vector-17.png" alt="" />
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
