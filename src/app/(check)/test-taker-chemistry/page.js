"use client"
import React from "react";
import AdminNav from "../admin-nav";
import { FiMoreVertical } from "react-icons/fi";
import { Dropdown } from "rsuite";

export default function page() {
  return (
    <div className="w-full relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Test Takers - Chemistry"} />
      </div>
      <div className="w-100 m-auto">
        <div className="flex flex-col md:flex-col lg:flex-col xl:flex 2xl:flex xl:flex-row 2xl:flex-row justify-between">
        <div className="lg:order-1 md:order-1 2xl:-order-none flex gap-3 mb-4 md:mb-4 lg:mb-2">
          <div className="bg-sub-bg-2 rounded p-3 border border-custom-2">
            <div className="flex items-center">
              <div className="w-8">
                <img src="icon-park-open-2.png" alt="" width="100%" />
              </div>
              <div className="text-base font-bold">43</div>
            </div>
            <div>Total Test Takers</div>
          </div>
          <div className="bg-sub-bg rounded p-3 border border-background-color">
            <div className="flex items-center">
              <div className="w-8">
                <img src="icon-button-191.png" alt="" width="100%" />
              </div>
              <div className="text-base font-bold">30</div>
            </div>
            <div>Active Test Takers</div>
          </div>
          <div className="bg-white rounded p-3 border border-black">
            <div className="flex items-center"> 
              <div className="w-8">
                <img src="icon-button-192.png" alt="" width="100%" />
              </div>
              <div className="text-base font-bold">13</div>
            </div>
            <div>Non Active Test Takers</div>
          </div>
          <div className="bg-inactive rounded p-3 border border-red-500">
            <div className="flex items-center">            
              <div className="w-8">
                <img src="icon-button-201.png" alt="" width="100%" />
              </div>
              <div className="text-base font-bold">50%</div>
            </div>
            <div>Overall Performance</div>
          </div>
        </div>
        <div className="lg:order-2 md:order-2 2xl:-order-none justify-end flex flex-wrap gap-1">
            <div className="bg-gray-200 flex items-center h-14 rounded-md">
              <div className="rounded-l-md hover:bg-gray-400 py-4 pl-2 pr-2 transition-colors ease-linear duration-150">
                <div className="w-5 cursor-pointer">
                  <img src="search.png" alt="search" width={"100%"} />
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
                  <img src="funnel.png" alt=""  width={"100%"}/>
                </div>
                Filter
              </button>
            </div>
            <div className="h-12">
              <button className="py-4 px-5 bg-gray-200 rounded-md">
                <div className="w-5">
                  <img src="vector-322.png" alt="layout" width={"100%"} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
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
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr>
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="bg-inactive py-2 px-4 w-20 text-red-500 rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr>
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr>
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr className="bg-gray-200">
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr>
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-red-500 py-2 px-4 w-20  bg-inactive rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr className="bg-gray-200">
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
            </tr>
            <tr>
                    <td className="w-[5%] p-3"> <img src="create-11.png" alt="" /></td>
                    <td className="w-[18%] p-3">Chinyere Adaku</td>
                    <td className="w-[18%] p-3">20</td>
                    <td className="w-[18%] p-3">15/30</td>
                    <td className="w-[18%] p-3"><img src="group-2376591.png" alt="" /></td>
                    <td className="w-[18%] p-3"><div className="text-background-color py-2 px-4 w-20  bg-sub-bg rounded-3xl">Active</div></td>
                    <td className="w-[5%] p-3">  <Dropdown title={<FiMoreVertical/>}  noCaret className="dropdown2 dropdown5" >
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    <Dropdown.Item>Export PDF</Dropdown.Item>
                    <Dropdown.Item>Export HTML</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown></td>
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
