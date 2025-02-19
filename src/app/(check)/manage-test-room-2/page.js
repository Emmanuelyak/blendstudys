"use client";
import React from "react";
import AdminNav from "../admin-nav";
import { Dropdown } from "rsuite";

export default function ManageTestRooms(props) {
  return (
    <div className="w-full relative 2xl:mb-0 lg:mb-0 md:mb-0 sm:mb-32">
      <div className="h-1/4">
        <AdminNav title={"Manage Test Rooms"} />
      </div>
      <div className="flex justify-end 2xl:w-10/12 m-auto mb-3">
      <div className="flex gap-3">
            <div className="bg-gray-200 flex items-center rounded-md">
              <div className="rounded-l-md hover:bg-gray-400 py-4  pl-2 pr-2 transition-colors ease-linear duration-150">
                <div className="w-5 cursor-pointer">
                  <img src="search.png" alt="search" width={"100%"} />
                </div>
              </div>
              <div className="w-32 2xl:w-64">
                <input
                  className="py-4  w-full bg-transparent outline-none cursor-pointer"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div>
              <button className="bg-gray-200 flex py-4 gap-4 pl-2 pe-2 2xl:pr-10 rounded">
                <div className="w-4">
                  <img src="funnel.png" alt=""  width={"100%"}/>
                </div>{" "}
                Filter
              </button>
            </div>
            <div>
              <button className="py-4 px-5 bg-gray-200 rounded-md" onClick={props.onClick}>
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
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 2xl:w-10/12 m-auto ">
        <div className="border-2 rounded-md border-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-sub-bg p-2 rounded-md text-2">Active</div>{" "}
              <div className="mt-4">
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
              </div>
            </div>
            <div className="mt-6">
              <h6>Brainwave Room</h6>
            </div>
          </div>
          <div className="px-5 pt-0 pb-3">
            <div className="flex gap-16">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="question-filled-1.png" alt="" />{" "}
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-3 text-nowrap">
                <img src="ion-time.png" alt="" /> <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-12 mt-8">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="subscribe-1.png" alt="" /> <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-3 pl-1 text-nowrap">
                <img src="lets-icons-date-range-fill.png" alt="" />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="fluent-people-team-20-filled-1.png" alt="" />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md border-background-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-sub-bg p-2 rounded-md text-2 text-nowrap">
                Active
              </div>
              <div className="mt-4">
                {/* <img src="Vector (17).png" alt="" /> */}
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
              </div>
            </div>
            <div className="mt-6">
              <h6>Brainwave Room</h6>
            </div>
          </div>
          <div className="px-5 pt-0 pb-3">
            <div className="flex gap-16">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="question-filled-1.png" alt="" />
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-3 text-nowrap">
                <img src="ion-time.png" alt="" /> <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-12 mt-8">
              <div className="flex items-center gap-3">
                <img src="subscribe-1.png" alt="" /> <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-3 pl-1 text-nowrap">
                <img src="lets-icons-date-range-fill.png" alt="" />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="fluent-people-team-20-filled-1.png" alt="" />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 2xl:w-10/12 m-auto pt-10">
        <div className="border-2 rounded-md border-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-inactive p-2 text-red-500 rounded-md text-2 text-nowrap">
                Inactive
              </div>
              <div className="mt-4">
                {/* <img src="Vector (17).png" alt="" /> */}
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
              </div>
            </div>
            <div className="mt-6">
              <h6>Brainwave Room</h6>
            </div>
          </div>
          <div className="px-5 pt-0 pb-3">
            <div className="flex gap-16">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="question-filled-1.png" alt="" />
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-3 text-nowrap">
                <img src="ion-time.png" alt="" /> <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-12 mt-8">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="subscribe-1.png" alt="" /> <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-3 pl-1 text-nowrap">
                <img src="lets-icons-date-range-fill.png" alt="" />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="fluent-people-team-20-filled-1.png" alt="" />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md border-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-inactive p-2 rounded-md text-red-500 text-2">Inactive</div>
              <div className="mt-4">
                {/* <img src="Vector (17).png" alt="" /> */}
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
              </div>
            </div>
            <div className="mt-6">
              <h6>Brainwave Room</h6>
            </div>
          </div>
          <div className="px-5 pt-0 pb-3">
            <div className="flex gap-16">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="question-filled-1.png" alt="" />
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-3 text-nowrap">
                <img src="ion-time.png" alt="" /> <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-12 mt-8">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="subscribe-1.png" alt="" /> <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-3 pl-1 text-nowrap">
                <img src="lets-icons-date-range-fill.png" alt="" />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <img src="fluent-people-team-20-filled-1.png" alt="" />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 2xl:w-10/12 m-auto pt-10  items-center">
        <div className="2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-10">
          Show <span className="font-bold">1</span> to
          <span className="font-bold">10</span> of
          <span className="font-bold">20</span> results
        </div>
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
  );
}

