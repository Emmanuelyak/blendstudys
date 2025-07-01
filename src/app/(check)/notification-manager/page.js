"use client";
import React from "react";
import AdminNav from "@/app/(check)/admin-nav";
import { ChevronRight } from "lucide-react";
import { Toggle } from "rsuite";
// import "@/app/(check)/notification-manager/style/style.css";

export default function page() {
  return (
    <div className="relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Settings and privacy"} />
      </div>

      <div className="w-100 md:w-11/12 m-auto mt-24 md:mt-10">
        <h3 className="text-base md:text-2xl">NOTIFICATIONS</h3>

        <div className="w-full border border-black rounded-lg px-1 md:px-10 py-10 mt-3">
          <div className="flex justify-between items-center mb-10 text-nowrap text-3 md:text-2xl font-medium">
            <div>
              <p>Notification Preference</p>
            </div>{" "}
            <div>
              <ChevronRight />
            </div>
          </div>
          <div className="flex justify-between items-center mb-10 text-nowrap text-3 md:text-2xl font-medium">
            <div>
              <p>Subscription Alerts</p>
            </div>{" "}
            <div>
              <Toggle defaultChecked className="toggle1" />
            </div>
          </div>
          <div className="flex justify-between items-center mb-10 text-nowrap text-3 md:text-2xl font-medium">
            <div>
              <p>Test Room Engagement Alerts.</p>
            </div>{" "}
            <div>
              <Toggle defaultChecked className="toggle1" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="py-3 px-5 md:py-5 md:px-12 rounded text-white bg-color">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
