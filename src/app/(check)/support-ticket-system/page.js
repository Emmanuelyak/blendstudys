"use client";
import React from "react";
import AdminNav from "../admin-nav";
import { Container, Dropdown } from "rsuite";

function SupportTicketSystem() {
  return (
    <div className="w-full relative  mb-32 md:mb-3">
      <div className="h-1/4">
        <AdminNav title={"Create Test Room"} />
      </div>

      <div className=" w-11/12 2xl:w-10/12 2xl:pt-5 lg:w-9/12 lg:pt-20  md:pt-20 m-auto">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20">
          <div className="flex flex-col gap-4">
            <Container className="gap-2">
              <label htmlFor="" className="">
              Support Category
              </label>
              <Dropdown
                className="dropdown w-full border-0 rounded-md outline-none bg-gray-100"
                title="Select an option"
                size="lg"
              />
            </Container>
            <Container className="gap-2">
              <label htmlFor="" className="">
              Support Purpose
              </label>
              <Dropdown
                className="dropdown w-full border-0 rounded-md outline-none bg-gray-100"
                title="Select an option"
                size="lg"
              />
            </Container>
          </div>
          <div className="flex flex-col gap-4">
            <Container className="gap-2">
              <label htmlFor="" className="">
              Priority
              </label>
              <Dropdown
                className="dropdown w-full border-0 rounded-md outline-none bg-gray-100"
                title="Select an option"
                size="lg"
              />
            </Container>
            <Container className="gap-2">
              <label htmlFor="" className="">
               Subject
              </label>
              <Dropdown
                className="dropdown w-full border-0 rounded-md outline-none bg-gray-100"
                title="Select an option"
                size="lg"
              />
            </Container>
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="">Description</label>
            <textarea name="" id="" className="w-full h-36 bg-gray-100 rounded-lg outline-none md:px-10 px-2 md:py-10 py-2"></textarea>
          </div>
          <div className="flex justify-end mt-7">
            <button className="text-white bg-background-color border-transparent rounded-md font-light text-sm md:text-xl py-3 px-6 md:px-10">
              Submit
            </button>
          </div>
      </div>
      
    </div>
  );
}

export default SupportTicketSystem;
