"use client";
import React from "react";
import AdminNav from "../../../components/admin-nav";
import { Dropdown } from "rsuite";
import { RxDotsHorizontal } from "react-icons/rx";
import Image from "next/image";

export default function AllTest() {
  return (
    <div className="w-full relative 2xl:mb-0 lg:mb-0 md:mb-0 sm:mb-32">
      <div className="h-1/4">
        <AdminNav title={"Brainwave - All Test"} />
      </div>
      <div className="flex pt-20 md:pt-10 lg:pt-2 2xl:p-2 justify-end w-100 2xl:w-10/12 m-auto mb-3">
        <button className="bg-background-color text-white px-10 py-4 rounded-md hover:bg-gc transition-colors duration-200">
          Create Test
        </button>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-1 w-100  2xl:gap-10 2xl:w-10/12 m-auto ">
        <div className="border-2 rounded-md border-color">
          <div className="px-2 lg:px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-sub-bg p-2 rounded-md text-2">Publish now</div>{" "}
              <div className="mt-4">
                {/* <img src="Vector (17).png" alt="" /> */}
                <Dropdown
                  title={<RxDotsHorizontal />}
                  noCaret
                  className="bg-gray-100 dropdown22"
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
              <h6>Chemistry</h6>
            </div>
          </div>
          <div className="px-2 lg:px-5 pt-0 pb-3">
            <div className="flex gap-11 lg:gap-16">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/question-filled-1.png"
                  alt=""
                />{" "}
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/ion-time.png" alt="" />{" "}
                <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-12 mt-8">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/subscribe-1.png" alt="" />{" "}
                <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 pl-1 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/lets-icons-date-range-fill.png"
                  alt=""
                />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/fluent-people-team-20-filled-1.png"
                  alt=""
                />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md border-background-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-sub-bg p-2 rounded-md text-2 text-nowrap">
                Published
              </div>
              <div className="mt-4">
                {/* <img src="/Vector (17).png" alt="" /> */}
                <Dropdown
                  title={<RxDotsHorizontal />}
                  noCaret
                  className="bg-gray-100 dropdown22"
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
              <h6>English</h6>
            </div>
          </div>
          <div className="px-2 lg:px-5 pt-0 pb-3">
            <div className="flex gap-11 lg:gap-16">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/question-filled-1.png"
                  alt=""
                />{" "}
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/ion-time.png" alt="" />{" "}
                <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-12 mt-8">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/subscribe-1.png" alt="" />{" "}
                <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 pl-1 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/lets-icons-date-range-fill.png"
                  alt=""
                />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/fluent-people-team-20-filled-1.png"
                  alt=""
                />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-1 lg:gap-10 w-100 2xl:w-10/12 m-auto pt-10">
        <div className="border-2 rounded-md border-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-sub-bg p-2 rounded-md text-2 text-nowrap">
                Scheduled
              </div>
              <div className="mt-4">
                {/* <img src="/Vector (17).png" alt="" /> */}
                <Dropdown
                  title={<RxDotsHorizontal />}
                  noCaret
                  className="bg-gray-100 dropdown22"
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
              <h6>Physics</h6>
            </div>
          </div>
          <div className="px-2 lg:px-5 pt-0 pb-3">
            <div className="flex gap-11 lg:gap-16">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/question-filled-1.png"
                  alt=""
                />{" "}
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/ion-time.png" alt="" />{" "}
                <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-12 mt-8">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/subscribe-1.png" alt="" />{" "}
                <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 pl-1 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/lets-icons-date-range-fill.png"
                  alt=""
                />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/fluent-people-team-20-filled-1.png"
                  alt=""
                />
                <span>39 Test Takers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md border-color">
          <div className="px-5 pt-5 pb-3 w-full border-b-2 border-background-color mb-5">
            <div className="flex justify-between items-center">
              <div className="bg-sub-bg p-2 rounded-md text-2">Draft</div>
              <div className="mt-4">
                {/* <img src="/Vector (17).png" alt="" /> */}
                <Dropdown
                  title={<RxDotsHorizontal />}
                  noCaret
                  className="bg-gray-100 dropdown22"
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
              <h6>History</h6>
            </div>
          </div>
          <div className="px-2 lg:px-5 pt-0 pb-3">
            <div className="flex gap-11 lg:gap-16">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/question-filled-1.png"
                  alt=""
                />{" "}
                <span> 20 Questions</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/ion-time.png" alt="" />{" "}
                <span> 120 Mins</span>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-12 mt-8">
              <div className="flex items-center gap-1 lg:gap-3 text-nowrap">
                <Image width={100} height={100} src="/subscribe-1.png" alt="" />{" "}
                <span>20 Subscribers</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3 pl-1 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/lets-icons-date-range-fill.png"
                  alt=""
                />
                <span>24th Sep 2024</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-3 text-nowrap">
                <Image
                  width={100}
                  height={100}
                  src="/fluent-people-team-20-filled-1.png"
                  alt=""
                />
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
              <Image width={100} height={100} src="/vector-17.png" alt="" />
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
