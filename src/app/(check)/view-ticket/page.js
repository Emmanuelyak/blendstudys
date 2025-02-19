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
  };
  return (
    <div>
      {show ? (
        <ManageTestRooms onClick={onClick} />
      ) : (
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
                        <button
                          className="py-4 px-5 bg-gray-200 rounded-md"
                          onClick={onClick}
                        >
                          <div className="w-5">
                            <img
                              src="layout-11.png"
                              alt="layout"
                              width={"100%"}
                            />
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="py-4 px-5 bg-sub-bg rounded-md">
                          <div className="w-5">
                            <img
                              src="bullet-list-67.png"
                              alt="layout"
                              width={"100%"}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border rounded-t-md border-gray-300 mt-7">
                <div className="px-7 rounded-t-md py-3 border-b border-gray-300">
                  <p className="font-semibold">Ticket</p>
                </div>
                <div className="block md:flex w-full">
                  <div className="w-full md:w-5/12">
                    <div className="flex  p-2 justify-between mb-12 mt-5 bg-sub-bg items-start">
                      <div className="flex gap-3">
                        <div className="roundded-full w-16 h-16">
                          <img src="ellipse-11.png" alt="img" width={"100%"} />
                        </div>
                        <div>
                          <h5 className="mb-4">Michelle Ajoma</h5>{" "}
                          <p>Account Suspension</p>
                        </div>
                      </div>

                      <div>
                        <p>Jan 23</p>
                      </div>
                    </div>
                    <div className="flex  p-2 justify-between mb-12 items-start">
                      <div className="flex gap-3">
                        <div className="roundded-full w-16 h-16">
                          <img src="ellipse-11.png" alt="img" width={"100%"} />
                        </div>
                        <div>
                          <h5 className="mb-4">Michelle Ajoma</h5>{" "}
                          <p>Account Suspension</p>
                        </div>
                      </div>

                      <div>
                        <p>Jan 23</p>
                      </div>
                    </div>
                    <div className="flex  p-2 justify-between mb-10 items-start">
                      <div className="flex gap-3">
                        <div className="roundded-full w-16 h-16">
                          <img src="ellipse-11.png" alt="img" width={"100%"} />
                        </div>
                        <div>
                          <h5 className="mb-4">Michelle Ajoma</h5>
                          <p>Account Suspension</p>
                        </div>
                      </div>

                      <div>
                        <p>Jan 23</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-7/12 px-10 py-5 border border-l-gray-300">
                    <h5>Account Suspension</h5>
                    <p className="">Michelle</p>

                    <div className="bg-sub-bg p-5 rounded-md mt-5">
                      Enim reprehenderit quis Lorem esse est ad nisi ut labore
                      ad sunt Lorem quis anim culpa occaecat. Ut ali Enim
                      reprehenderit quis Lorem esse est ad nisi ut labore ad
                      sunt Lorem quis anim culpa occaecat. Ut aliEnim
                      reprehenderit quis Lorem esse est ad nisi ut labore ad
                      sunt Lorem quis anim culpa occaecat. Ut ali Account
                      Suspensio t. Ut aliEnim reprehenderit quis Lorem esse est
                      ad nisi ut labore ad sunt Lorem quis anim culpa occaecat.
                      Ut ali Account Suspensio
                    </div>

                    <div className="flex justify-end mt-24">
                      <div><button className="bg-color text-white px-6 rounded-md py-3">Retry Test</button></div>
                    </div>
                  </div>
                </div>
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
        </div>
      )}
    </div>
  );
}
