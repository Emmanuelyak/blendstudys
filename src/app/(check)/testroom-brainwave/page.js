import React from "react";
import AdminNav from "../admin-nav";

function TestRoomBrainRoom() {
  return (
    <div className="w-full relative">
      <div className="h-1/4">
        <AdminNav title={"Test Room - Brainwave"} />
      </div>

      <div className="w-11/12 lg:w-10/12 2xl:w-11/12  bg-sub-bg flex flex-col justify-center items-center rounded-lg m-auto mt-32">
        <h5 className="text-center pt-5 pb-8">Ready to Create a Test?</h5>
        <p className="text-center text-wrap text-sm 2xl:text-lg 2xl:text-nowrap mb-5 text-gray-600">
          Click “Create Test” to create a new test for Students to learn and
          improve their Academics.
        </p>

        <div className="mb-10">
          <button className="bg-background-color py-4 text-white text-sm 2xltext-xl px-10 rounded-md">
            Create Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestRoomBrainRoom;
