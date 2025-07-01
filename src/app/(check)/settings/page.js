"use client";
import React, { useState } from "react";
import AdminNav from "@/app/(check)/admin-nav";
import { ChevronRight,ChevronDown } from "lucide-react";
import { Dropdown, Button, ButtonToolbar } from "rsuite";
import { FeedbackModal } from "@/app/feedback/feedback-modal";
import Link from "next/link";
import Image from "next/image";

export default function Settings() {
  const [accountCenter, setAccountCenter] = useState(false);
  const [notificationManager, setNotificationManager] = useState(false);

  const toggleAction = (a, b) => {
    b(!a);
  };
  return (
    <div className="relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Settings and privacy"} />
      </div>

      <div className="w-100 lg:w-10/12 2xl:w-11/12 m-auto mt-20">
        <div className="grid grid-cols-1 gap-10 relative">
          <div>
            <div
              className="flex justify-between items-center"
              onClick={() => toggleAction(accountCenter, setAccountCenter)}
            >
              <div className="flex items-center gap-3">
                <div className="w-6">
                  <Image width={100} height={100} src="/mdi-account-cog.png" alt="" />
                </div>
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">
                    Account Center
                  </h4>
                  <p className="text-2">
                    Password, Security and personal details
                  </p>
                </div>
              </div>
              <div>{!accountCenter ? <ChevronRight /> : <ChevronDown />}</div>
            </div>
            {accountCenter ? (
              <div className="bg-slate-300 top-14 w-full rounded h-52 ">
                <ul className="px-10 py-3 gap-3">
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div>
            <div
              className="flex justify-between items-center "
              onClick={() =>
                toggleAction(notificationManager, setNotificationManager)
              }
            >
              <div className="flex items-center gap-3">
                <div className="w-6">
                  <Image width={100} height={100}
                    src="/tdesign-notification-filled2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">
                    Notifications Management
                  </h4>
                </div>
              </div>
              <div>
                {!notificationManager ? <ChevronRight /> : <ChevronDown />}
              </div>
            </div>
            {notificationManager ? (
              <div className="bg-slate-300 top-14 w-full rounded h-52 ">
                <ul className="px-10 py-3 gap-3">
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-6">
                <Image width={100} height={100}
                  src="/fluent-chat-help-20-filled.png"
                  alt=""
                />
              </div>
              <div>
                <Link href="/help-center" className="no-underline hover:no-underline hover:text-black text-black">
                  <h4 className="text-nowrap text-sm md:text-lg">
                    Help Center
                  </h4>
                </Link>
              </div>
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-6">
                  <Image width={100} height={100} src="/fa6-solid-language.png" alt="" />
                </div>
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">Language</h4>
                </div>
              </div>
              <div>
                {/* <ChevronRight /> */}
                <Dropdown title="English (USA)" className="lang-dp-dwn">
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
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6">
                <Image width={100} height={100} src="/mdi-theme.png" alt="" />
              </div>
              <div>
                <h4 className="text-nowrap text-sm md:text-lg">Theme</h4>
              </div>
            </div>
            <Dropdown title="AUTO" className="theme-dropdown">
              <Dropdown.Item><p className="pl-5">Auto</p></Dropdown.Item>
              <Dropdown.Item>Light</Dropdown.Item>
              <Dropdown.Item>Dark</Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <div
              className="flex justify-between items-center"
              // onClick={() => toggleAction(accountCenter, setAccountCenter)}
            >
              <div className="flex items-center gap-3 relative overflow-hidden">
                <div className="w-7">
                  <Image width={100} height={100}
                    src="/material-symbols-delete.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">
                    Account Center
                  </h4>
                  <p className="text-2">
                    Password, Security and personal details
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-red-700 text-white hover:bg-red-800 md:py-3 py-3 px-5 md:px-10 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal />
    </div>
  );
}

