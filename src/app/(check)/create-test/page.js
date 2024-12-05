import React from "react";
import AdminNav from "../adminNav";
import { Dropdown } from "rsuite";

function CreateTest() {
  return (
    <div className="w-full relative">
      <div className="h-1/4">
        <AdminNav title={"Create Test"} />
      </div>

      <div className="pt-36">
        <div className="w-11/12 grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:w-11/12 lg:w-10/12 lg:gap-20 md:gap-5 md:w-9/12 2xl:gap-32 m-auto mb-3">
          <div>
            <label htmlFor="">Test Name</label>
            <input
              type="text"
              className="w-full rounded-md p-3  outline-none bg-gray-100 mt-2"
              placeholder="Enter Test Name"
            />
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <Dropdown
              className="dropdown w-full rounded-md outline-none bg-gray-100 mt-2"
              title="Select an option"
              size="lg"
            />
          </div>
        </div>
        <div className="w-11/12 grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:w-11/12 lg:w-10/12 lg:gap-20 md:gap-5 md:w-9/12 2xl:gap-32 m-auto">
          <div>
            <div className="mb-3">
              <label htmlFor="" className="">Study Materials Attachment</label>
              <Dropdown
                className="dropdown w-full border border-0 rounded-md outline-none bg-gray-100 mt-2"
                title="Select an option"
                size="lg"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Upload Additional Document</label>
              <div className="spacing-y-6 h-48 bg-sub-bg1 border-2 border-dashed border-color rounded-lg mt-2">
                <div className="flex flex-col items-center justify-center h-48 space-y-4">
                  <p className="text-gray-600 text-center">
                    Drag & drop your files here
                  </p>
                  <p className="text-gray-500 text-center">OR</p>
                  <div>
                    <label className="cursor-pointer">
                      <input type="file" className="hidden" />
                      <span className="px-4 py-2 text-sm text-cyan-500 border border-cyan-500 rounded-md hover:bg-cyan-50 transition-colors duration-200 text-base">
                        Browse files
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="" className="mt-4">URL</label>
            <input
              type="text"
              className="w-full rounded-md p-3 outline-none bg-gray-100 mt-2"
              placeholder="Enter Test Name"
            />
          </div>
        </div>
        <div className="w-11/12 2xl:w-11/12 m-auto mt-5">
          <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div>
                <input type="date" name="" id="" placeholder="Shedule" />
            </div>
            <div>
                <div className="flex justify-end">
                    <button className="py-2 px-4 2xl:py-4 lg:py-4 md:py-2 2xl:px-10 lg:px-10 md:px-5 text-color border-2 rounded-md border-custom-teal bg-sub-bg text-nowrap hover:bg-cyan-50 transition-colors duration-200">Saved as Draft</button>
                    <button className="py-2 px-4 2xl:py-4 lg:py-4 md:py-2 2xl:px-10 lg:px-10 md:px-5 bg-background-color border-2 rounded-md border-custom-teal text-white ml-6 text-nowrap hover:bg-gc transition-colors duration-200">Published</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTest;
