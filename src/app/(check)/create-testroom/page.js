"use client"
import React from "react";
import AdminNav from "../admin-nav";
import { Container, Dropdown } from "rsuite";

function CreateTestRoom() {
  return (
    <div className="w-full relative">
      <div className="h-1/4">
        <AdminNav title={"Create Test Room"} />
      </div>

      <div className=" w-11/12 2xl:w-10/12 2xl:pt-5 lg:w-9/12 lg:pt-20  md:pt-20 m-auto">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20">
          <div className="flex flex-col gap-4">
            {" "}
            <Container className="gap-2">
              <label htmlFor="Test Room Name mb-3">Test Room Name</label>
              <input
                type="text"
                className="bg-gray-100 text-black w-full py-3 rounded-md px-10 outline-none text-base"
              />
            </Container>
            <Container className="gap-2">
              <label htmlFor="" className="">
                Class
              </label>
              <Dropdown
                className="dropdown w-full border border-0 rounded-md outline-none bg-gray-100"
                title="Select an option"
                size="lg"
              />
            </Container>
            <Container className="gap-2">
              <label htmlFor="" className="">
                Room Size
              </label>
              <input
                type="text"
                className="bg-gray-100 text-black w-full py-3 rounded-md px-10 outline-none text-base"
              />
            </Container>
          </div>
          <div>
            <Container className="gap-2">
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                className="w-full h-ht-2 bg-gray-100 rounded-md"
              ></textarea>
            </Container>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:w-full lg:w-full md:w-full sm:w-11/12 m-auto gap-10 mt-3">
          <Container>
            <label htmlFor="">Pricing Model</label>
            <Dropdown
              className="dropdown w-full  rounded-md outline-none bg-gray-100"
              title="Select an option"
              size="lg"
            />
          </Container>
          <Container>
            <label htmlFor="text-xl font-bold">
              Payment Currency and Amount
            </label>
            <div className="w-full  rounded-sm outline-none py-2 bg-gray-100">
              <Dropdown size="sm" title={`niger`} className="dropdown-bg" />
              <input
                type="text"
                className=" bg-gray-100 py-1 outline-none text-black w-9/12 ml-3"
                placeholder="N200,000"
              />
            </div>
          </Container>
        </div>
        <div className="flex justify-end mt-7">
          <button className="text-white bg-background-color border-transparent rounded-md font-light text-sm md:text-xl py-3 px-6 md:px-10">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTestRoom;
