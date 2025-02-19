"use client";
import React from "react";
import AdminNav from "@/app/(check)/admin-nav";
import { Dropdown, IconButton } from "rsuite";
import { FiMoreVertical } from "react-icons/fi";
import ManageTestRooms from "../manage-test-room-2/page";

export default function ManageTestRoomsTable() {
  const [show, setShow] = React.useState(false);
  const icon = `<div className="flex flex-col gap-1">&#9679;&#9679;&#9679;</div>`;
  console.log(icon);
  const onClick = () => {
    setShow(!show);
  }
  return (
    <div>
{show ? <ManageTestRooms onClick={onClick} /> :(
    <div className="relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"View Support Ticket"} />
      </div>
      <div>
      <div className=" w-100 m-auto pt-20 lg:pt-16 2xl:pt-10">
        <div className="flex md:justify-end items-center">
        <div className="flex justify-end items-end md:w-5/12 w-full">
          
          <div className="grid grid-cols-1 gap-3 md:flex md:gap-3 md:justify-end w-full ml-1 md:ml-0 md:6/12">
            <div className="bg-gray-200 flex items-center rounded-md w-full">
              <div className="rounded-l-md hover:bg-gray-400 py-4 pl-2 pr-2 transition-colors ease-linear duration-150">
                <div className="w-5 cursor-pointer">
                  <img src="search.png" alt="search" width={"100%"} />
                </div>
              </div>
              <div className="2xl:w-64 w-full">
                <input
                  className="py-4 w-full bg-transparent outline-none cursor-pointer"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div>
                <button className="bg-gray-200 flex py-4 gap-4 pl-2 pe-2 md:pr-10 pr-24 rounded">
                  <div className="w-4">
                    <img src="funnel.png" alt="" width={"100%"} />
                  </div>
                  Filter
                </button>
              </div>
              <div>
                <button className="py-4 px-5 bg-gray-200 rounded-md" onClick={onClick}>
                  <div className="w-5">
                    <img src="layout-11.png" alt="layout" width={"100%"} />
                  </div>
                </button>
              </div>
              <div>
                <button className="py-4 px-5 bg-sub-bg rounded-md">
                  <div className="w-5">
                    <img src="bullet-list-67.png" alt="layout" width={"100%"} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-5 rounded border-collapse hidden md:block">
          <table className="w-full m-auto border-collapse border-gray-400 overflow-x-auto lg:overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <td className="w-[8.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 text-nowrap border-gray-400  border">
                Ticket Number
                </td>
                <td className="w-[8.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                Category
                </td>
                <td className="w-[8.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                Purpose
                </td>
                <td className="w-[8.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                Priority
                </td>
                <td className="w-[8.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                Subject
                </td>
                <td className="w-[8.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border">
                  Status
                </td>
                <td className="w-[1.25%] px-5 font-semibold md:text-sm 2xl:text-lg py-4 border-gray-400  border"></td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-black p-5 border 2xl:text-base md:text-2 border-gray-400">
                15638
                </td>
                
                <td className="text-black p-5 border 2xl:text-base md:text-2 border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border 2xl:text-base md:text-2 text-nowrap border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border 2xl:text-base border-gray-400 md:text-2 text-nowrap">
                Medium
                </td>
                <td className="text-dark p-5 border 2xl:text-base md:text-2 border-gray-400">
                Login Issue
                </td>
                <td className="text-blue-500 p-5 border 2xl:text-base md:text-2 border-gray-400">
                Processing
                </td>
                <td className="text-black py-5 lg:justify-center md:px-5 border border-gray-400">
                  <div className="flex justify-center">
                    <Dropdown
                      title={<FiMoreVertical />}
                      noCaret
                      className="dropdown2 dropdown5"
                    >
                      <Dropdown.Item>New File</Dropdown.Item>
                      <Dropdown.Item>
                        New File with Current Profile
                      </Dropdown.Item>
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
                15638
                </td>
                
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  Low
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Account Suspension
                </td>
                <td className="text-color p-5 border md:text-2 2xl:text-base  border-gray-400">
                  Open
                </td>
                <td className="text-black py-5 md:px-5 border border-gray-400">
                  <div className="flex justify-center">
                    <Dropdown
                      title={<FiMoreVertical />}
                      noCaret
                      className="dropdown2 dropdown5"
                    >
                      <Dropdown.Item>New File</Dropdown.Item>
                      <Dropdown.Item>
                        New File with Current Profile
                      </Dropdown.Item>
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
                15638
                </td>
                
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  High
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Feature Request
                </td>
                <td className="text-red-500 p-5 border md:text-2 2xl:text-base  border-gray-400">
                Closed
                </td>
                <td className="text-black py-5 md:px-5 border border-gray-400">
                  <div className="flex justify-center">
                    <Dropdown
                      title={<FiMoreVertical />}
                      noCaret
                      className="dropdown2 dropdown5"
                    >
                      <Dropdown.Item>New File</Dropdown.Item>
                      <Dropdown.Item>
                        New File with Current Profile
                      </Dropdown.Item>
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
                15638
                </td>
                
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Lorem Ipsum 
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  text-nowrap border-gray-400">
                  High
                </td>
                <td className="text-black p-5 border md:text-2 2xl:text-base  border-gray-400">
                Feature Request
                </td>
                <td className="text-yellow-400 p-5 border md:text-2 2xl:text-base  border-gray-400">
                Resolved
                </td>
                <td className="text-black py-5 md:px-5 border border-gray-400">
                  <div className="flex justify-center">
                    <Dropdown
                      title={<FiMoreVertical />}
                      noCaret
                      className="dropdown2 dropdown5"
                    >
                      <Dropdown.Item>New File</Dropdown.Item>
                      <Dropdown.Item>
                        New File with Current Profile
                      </Dropdown.Item>
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
        <div className="md:hidden w-full mt-3">
          <table className="w-full">
            <thead className="w-full">
              <tr>
                <th className="text-black py-3 px-3 border flex items-center justify-between border-b-0 md:text-2 2xl:text-base border-gray-400 bg-gray-100">
                  <div>Action</div>
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
                <td className="text-black p-3 border text-2 border-gray-400 font-semibold bg-gray-100">
                Ticket Number
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-400 text-1.1">
                15638
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Category
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-nowrap border-gray-400">
                Lorem Ipsum 
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Purpose
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1  text-nowrap border-gray-400">
                Lorem Ipsum 
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Priority
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-nowrap border-gray-400">
                Medium
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Subject
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-nowrap border-gray-400">
                Login Issue
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Status
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-blue-500 p-3 border text-1.1 text-nowrap border-gray-400">
                Processing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden w-full mt-3">
          <table className="w-full">
            <thead className="w-full">
              <tr>
                <th className="text-black py-3 px-3 border flex items-center justify-between border-b-0 md:text-2 2xl:text-base border-gray-400 bg-gray-100">
                  <div>Action</div>
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
                <td className="text-black p-3 border text-2 border-gray-400 font-semibold bg-gray-100">
                Ticket Number
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-400 text-1.1">
                15638
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Category
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-nowrap border-gray-400">
                Lorem Ipsum 
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Purpose
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1  text-nowrap border-gray-400">
                Lorem Ipsum 
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Priority
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-nowrap border-gray-400">
                Medium
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Subject
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black p-3 border text-1.1 text-nowrap border-gray-400">
                Login Issue
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td className="text-black p-3 border text-2 font-bold border-gray-400 bg-gray-100">
                Status
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-color p-3 border text-1.1 text-nowrap border-gray-400">
                Open
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-100 flex justify-between md:justify-normal items-center pb-2 pt-10  m-auto gap-6">
        <div className="2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-10 text-1.1 text-nowrap 2xl:text-lg lg:text-lg w-4/12">
          Show <span className="font-bold">1</span>to
          <span className="font-bold"> 10</span> of
          <span className="font-bold"> 20</span> results
        </div>

        <div className="flex-1 text-1.1 md:text-base">
          <div className="flex items-center">
            &lt;
            <div className="grid grid-cols-7 items-center gap-1 md:gap-3 text-1.1 md:text-base md:mx-2">
              <div className="bg-background-color flex justify-center items-center px-2 md:px-3 rounded-md py-1 md:py-2 text-white">
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
      
    </div>)}
    </div>
  );
}
