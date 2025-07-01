import React from "react";
import AdminNav from "../admin-nav";

export default function ChemistryTest() {
  return (
    <div className="w-full relative 2xl:mb-0 lg:mb-0 md:mb-0 sm:mb-32">
      <div className="h-1/4">
        <AdminNav title={"Chemistry - Test Questions"} />
      </div>

      <div className="2xl:w-11/12 lg:w-10/12 bg-sub-bg flex flex-col justify-center items-center rounded-lg m-auto mt-32">
        <h5 className="text-center pt-5 pb-8">
          Ready to Create Test Questions?
        </h5>
        <p className="text-center text-lg mb-5 text-gray-600">
          Click “Create Test Question” to create a new test questions for
          Students to learn and improve their Academics.
        </p>

        <div className="mb-10">
          <button className="bg-background-color py-4 text-white text-xl px-10 text-nowrap rounded-md">
            Create Test Question
          </button>
        </div>
      </div>
    </div>
  );
}
