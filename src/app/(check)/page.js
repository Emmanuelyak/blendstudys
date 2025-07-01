"use client";
import React from "react";
import AdminNav from "./admin-nav";
import "rsuite/dist/rsuite.min.css";
import Image from "next/image";

function page() {
  return (
    <div className="w-full relative">
      <div className="h-1/4">
        <AdminNav title={"Dashboard"} />
      </div>

      <div className="h-5/4 2xl:pt-3 md:pt-32  md:pb-42">
        <div className="h-1/6">
          <div className="w-100 m-auto text-3xl font-bold ">
            Activity Summary
          </div>

          <div className="w-100 2xl:gap-10 md:gap-2 m-auto grid 2xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1 mt-5">
            <div className="border border-color rounded-xl 2xl:pt-5 md:pt-1">
              <div className="w-10/12 m-auto">
                <div className="w-12 h-12 rounded-full bg-sub-bg1 2zl:mb-5 md:mb-2 flex justify-center items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/b-comment.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="2xl:mt-5  mb-3">Total Test Rooms</p>
                <h6 className="pb-3">30</h6>
              </div>
            </div>
            <div className="border border-color rounded-xl pt-5">
              <div className="w-10/12 m-auto">
                <div className="w-12 h-12 rounded-full bg-sub-bg1 mb-5  flex justify-center items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/ion-people.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mt-5 mb-3">Total Test Takers</p>
                <h6 className="pb-3">30</h6>
              </div>
            </div>
            <div className="border border-color rounded-xl pt-5">
              <div className="w-10/12 m-auto">
                <div className="w-12 h-12 rounded-full bg-sub-bg1 mb-5  flex justify-center items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/mingcute-performance-fill.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mt-5 mb-3">Test Takers Performance</p>
                <div className="pb-3">
                  <Image
                    width={100}
                    height={100}
                    src="/group-237659.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="border border-color rounded-xl pt-5">
              <div className="w-10/12 m-auto">
                <div className="w-12 h-12 rounded-full bg-sub-bg1 mb-5  flex justify-center items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/eos-icons-machine-learning.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mt-5 mb-3">Total Earnings</p>
                <h6 className="pb-3">₦ 200,000</h6>
              </div>
            </div>
            <div className="border border-color rounded-xl pt-5 ">
              <div className="w-10/12 m-auto">
                <div className="w-12 h-12 rounded-full bg-sub-bg1 mb-5  flex justify-center items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/gridicons-money.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mt-5 mb-3 font-bold">Total Withdrawals</p>
                <h6 className="pb-3">₦ 100,000</h6>
              </div>
            </div>
          </div>
        </div>
        {/* h-100 */}
        <div className="w-100 m-auto mt-7  2xl:flex lg:flex sm:grid sm:grid-cols-1 2xl:gap-10 md:gap-5">
          <div className="2xl:w-4/12 lgw-4/12: md:w-full sm:w-full shadow-real rounded-2xl">
            <div className="w-11/12 m-auto">
              <h3 className="2xl:font-normal 2xl:text-2xl md:text-sm pt-6">
                Test Room Stats
              </h3>
              <div className="w-full flex justify-center items-center py-4">
                <Image width={100} height={100} src="/figpie.png" alt="" />
              </div>

              {/* c:\Users\Administrator\Downloads\  c:\Users\Administrator\Downloads\ c:\Users\Administrator\Downloads\ */}
              <div className="flex flex-col mt-10">
                <div className="grid grid-cols-2 gap-4  mb-5">
                  <div className=" flex items-start 2xl:gap-3 md:gap-1 ">
                    <div className="2xl:mt-1 md:mt-0">
                      <Image
                        width={100}
                        height={100}
                        src="/Vector-13.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="2xl:text-lg md:text-2 text-nowrap">
                        Total Subscribers
                      </p>
                      <h6>45%</h6>
                    </div>
                  </div>
                  <div className="flex 2xl:gap-3 md:gap-1 ">
                    <div className="2xl:mt-1 md:mt-0">
                      <Image
                        width={100}
                        height={100}
                        src="/Vector-16.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="2xl:text-lg text-nowrap md:text-2">
                        Active Subscriberss
                      </p>
                      <h6>45%</h6>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 mb-5">
                  <div className="flex 2xl:gap-3 md:gap-1">
                    <div className="2xl:mt-1 md:mt-0">
                      <Image
                        width={100}
                        height={100}
                        src="/Vector-14.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="2xl:text-lg text-nowrap md:text-2">
                        Inactive Subscribers
                      </p>
                      <h6>45%</h6>
                    </div>
                  </div>
                  <div className="flex 2xl:gap-3 md:gap-1 md:ml-2">
                    <div className="2xl:mt-1 md:mt-0">
                      <Image
                        width={100}
                        height={100}
                        src="/Vector-15.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="2xl:text-lg md:text-2">Active Now</p>
                      <h6>45%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:w-8/12 lgw-4/12: md:w-full sm:w-full shadow-real rounded-2xl ">
            <div className="w-11/12 m-auto">
              <div className=" object-contain pt-6">
                <Image
                  width={100}
                  height={100}
                  src="/frame-6.png"
                  alt=""
                  className="h-99"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" shadow-real 2xl:mt-7 md:mt-20 w-full">
        <div className=" text-center py-5">
          <p>
            2024 - <span className="text-color">Blendstudy</span> . all rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
