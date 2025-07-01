"use client";
import React from "react";
import AdminNav from "../admin-nav";
import { FiMoreVertical } from "react-icons/fi";
import { Dropdown } from "rsuite";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Test Takers - Chemistry"} />
      </div>
      <div className="w-100 m-auto md:mt-5 mt-20">
        <div className="flex flex-col md:flex-col lg:flex-col xl:flex 2xl:flex xl:flex-row 2xl:flex-row justify-between">
          <div className="lg:order-1 md:order-1 2xl:-order-none flex gap-1 mb-4 md:mb-4 lg:mb-2">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
              <div className="bg-sub-bg-2 rounded p-3 border border-custom-2">
                <div className="flex items-center">
                  <div className="w-5 md:w-8">
                    <Image
                      width={100}
                      height={100}
                      src="/icon-park-open-2.png"
                      alt=""
                    />
                  </div>
                  <div className="text-1.1 md:text-base font-bold">43</div>
                </div>
                <div className="text-1.1 md:text-base font-bold">
                  Total Test Takers
                </div>
              </div>
              <div className="bg-sub-bg rounded p-3 border border-background-color">
                <div className="flex items-center">
                  <div className="w-5 md:w-8">
                    <Image
                      width={100}
                      height={100}
                      src="/icon-button-191.png"
                      alt=""
                    />
                  </div>
                  <div className="text-1.1 md:text-base font-bold">30</div>
                </div>
                <div className="text-1.1 md:text-base">Active Test Takers</div>
              </div>
              <div className="bg-white rounded p-3 border border-black">
                <div className="flex items-center">
                  <div className="w-5 md:w-8">
                    <Image
                      width={100}
                      height={100}
                      src="/icon-button-192.png"
                      alt=""
                    />
                  </div>
                  <div className="text-1.1 md:text-base font-bold">13</div>
                </div>
                <div className="text-1.1 md:text-base">Total Test Takers</div>
              </div>
              <div className="bg-gray-200 rounded p-3 border border-gray-400">
                <div className="flex items-center">
                  <div className="w-5 md:w-8">
                    <Image
                      width={100}
                      height={100}
                      src="/icon-button-33.png"
                      alt=""
                    />
                  </div>
                  <div className="text-1.1 md:text-base font-bold">43</div>
                </div>
                <div className="text-1.1 md:text-base">Total Test Rooms</div>
              </div>
              <div className="bg-inactive rounded p-3 border border-red-500">
                <div className="flex items-center">
                  <div className="w-5 md:w-8">
                    <Image
                      width={100}
                      height={100}
                      src="/icon-button-201.png"
                      alt=""
                    />
                  </div>
                  <div className="text-1.1 md:text-base font-bold">50%</div>
                </div>
                <div className="text-1.1 md:text-base">Overall Performance</div>
              </div>
            </div>
          </div>
          <div className="lg:order-2 md:order-2 2xl:-order-none justify-end  flex flex-wrap gap-1">
            <div className="bg-gray-200 flex items-center h-14 rounded-md">
              <div className="rounded-l-md hover:bg-gray-400 py-4  pl-2 pr-2 transition-colors ease-linear duration-150">
                <div className="w-5 cursor-pointer">
                  <Image
                    width={100}
                    height={100}
                    src="/search.png"
                    alt="search"
                  />
                </div>
              </div>
              <div className="w-56 2xl:w-64">
                <input
                  className="py-4 w-full bg-transparent outline-none cursor-pointer"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="h-12">
              <button className="bg-gray-200 flex py-4 gap-4 pl-2 pr-10 rounded">
                <div className="w-4">
                  <Image width={100} height={100} src="/funnel.png" alt="" />
                </div>
                Filter
              </button>
            </div>
            <div className="h-12">
              <button className="py-4 px-5 bg-gray-200 rounded-md">
                <div className="w-5">
                  <Image
                    width={100}
                    height={100}
                    src="/vector-322.png"
                    alt="layout"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 md:block hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 rounded-t">
                <td className="w-[5%] p-3"></td>
                <td className="w-[18%] p-3">NAME</td>
                <td className="w-[18%] p-3">QUESTION ATTEMPTED</td>
                <td className="w-[18%] p-3">SCORE</td>
                <td className="w-[18%] p-3">PERFORMANCE</td>
                <td className="w-[18%] p-3">STATUS</td>
                <td className="w-[5%] p-3"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="bg-inactive py-2 px-4 w-20 text-red-500 rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-red-500 py-2 px-4 w-20  bg-inactive rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] p-3">
                  {" "}
                  <Image width={100} height={100} src="/create-11.png" alt="" />
                </td>
                <td className="w-[18%] p-3">Chinyere Adaku</td>
                <td className="w-[18%] p-3">20</td>
                <td className="w-[18%] p-3">15/30</td>
                <td className="w-[18%] p-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
                <td className="w-[18%] p-3">
                  <div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
                <td className="w-[5%] p-3">
                  {" "}
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden w-full mt-3">
          <table className="w-full">
            <thead className="w-full">
              <tr>
                <th className="text-black py-1 px-3 border flex items-center justify-between border-b-0 md:text-2 2xl:text-base border-gray-400 bg-gray-100">
                  <div className="text-2">Action</div>
                  <Dropdown
                    title={<FiMoreVertical />}
                    noCaret
                    className="dropdown2 dropdown5 mx-2"
                  >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown>
                </th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th className="text-black p-3 border text-2 flex items-start gap-28  border-gray-400 bg-gray-100">
                  <span className="w-[5%]">
                    {" "}
                    <Image
                      width={100}
                      height={100}
                      src="/create-11.png"
                      alt=""
                    />
                  </span>
                  NAME
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border text-center border-gray-400 text-1.1">
                  Chinyere Adaku
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="text-black p-3 border text-2 border-gray-400 bg-gray-100">
                  QUESTION ATTEMPTED
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-1.1 p-3 text-nowrap text-center border-gray-400">
                  20
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="text-black p-3 border text-2 border-gray-400 bg-gray-100">
                  SCORE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-center text-nowrap border-gray-400">
                  15/30
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="text-black p-3 border text-2 border-gray-400 bg-gray-100">
                  PERFORMANCE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="w-[18%] p-3 border border-gray-400">
                  <Image
                    width={100}
                    height={100}
                    src="/group-2376591.png"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="text-black p-3 border text-2 border-gray-400 bg-gray-100">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-400">
                  <div className="text-background-color text-center py-2 px-4  text-1.1 bg-sub-bg rounded-3xl">
                    Active
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-100 flex items-center pb-2 pt-10  m-auto gap-6">
        <div className="2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-10 text-1.1 text-nowrap 2xl:text-lg lg:text-lg w-4/12">
          Show <span className="font-bold">1</span> to
          <span className="font-bold">10</span> of
          <span className="font-bold">20</span> results
        </div>

        <div className="flex-1 text-1.1 md:text-lg ml-2 md:ml-0">
          <div className="flex items-center ">
            &lt;
            <div className="grid grid-cols-7 items-center gap-0 md:gap-3 md:mx-2">
              <div className="bg-background-color flex justify-center items-center  md:px-3 rounded-md py-2 text-white">
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
