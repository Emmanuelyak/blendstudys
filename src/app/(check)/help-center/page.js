"use client";
import React, { useState } from "react";
import AdminNav from "@/app/(check)/admin-nav";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Dropdown, Button, ButtonToolbar } from "rsuite";
import Link from "next/link";
// import { FeedbackModal } from "@/app/feedback/feedback-modal";

function Faq() {
  const [faq, setFaq] = useState(false);
  const [tutorials, setTutorials] = useState(false);
  const [userGuide, setUserGuide] = useState(false);
  const [ticketSupportSystem, setUserTicketSupportSyster] = useState(false);
//   const [notificationManager, setNotificationManager] = useState(false);

  const toggleAction = (a, b) => {
    b(!a);
  };
  return (
    <div className="relative">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Help Center"} />
      </div>

      <div className="w-100 lg:w-10/12 2xl:w-6/12 m-auto mt-20">
        <div className="grid grid-cols-1 gap-10 relative">
          {/* <div>
            <div
              className="flex justify-between items-center"
              onClick={() => toggleAction(accountCenter, setAccountCenter)}
            >
              <div className="flex items-center gap-3">
                <div className="w-6">
                  <img src="mdi-account-cog.png" alt="" width={"100%"} />
                </div>
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">Account Center</h4>
                  <p className="text-2">Password, Security and personal details</p>
                </div>
              </div>
              <div>
                <ChevronRight />
              </div>
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
          </div> */}
          <div>
            <h2 className="text-lg md:text-3xl">Help</h2>
          </div>

          <div>
            <div
              className="flex justify-between items-center "
              onClick={() =>
                toggleAction(faq, setFaq)
              }
            >
              <div className="flex items-center gap-3">
                <Link href="/faqs" className="no-underline hover:no-underline hover:text-black text-black">
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">FAQs</h4>
                </div>
                </Link>
              </div>
              <div>
               <ChevronRight />
              </div>
            </div>
            {/* {faq && (
              <div className="bg-slate-300 top-14 w-full rounded h-52 ">
                <ul className="px-10 py-3 gap-3">
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                </ul>
              </div>
            )} */}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
              <Link href="/tutorials" className="no-underline hover:no-underline hover:text-black text-black">
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">Tutorials</h4>
                </div>
                </Link>
              </div>
              <div>
               <ChevronRight />
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex justify-between items-center "
              onClick={() =>
                toggleAction(userGuide, setUserGuide)
              }
            >
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">User Guides</h4>
                </div>
              </div>
              <div>
              {!userGuide ? <ChevronRight /> : <ChevronDown />}
              </div>
            </div>
            {userGuide && (
              <div className="bg-slate-300 top-14 w-full rounded h-52 ">
                <ul className="px-10 py-3 gap-3">
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center "
              onClick={() =>
                toggleAction(ticketSupportSystem, setUserTicketSupportSyster)
              }
            >
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-nowrap text-sm md:text-lg">Suppport Ticket System</h4>
                </div>
              </div>
              <div>
                {!ticketSupportSystem ? <ChevronRight /> : <ChevronDown />}
                
            
              </div>
            </div>
            {ticketSupportSystem && (
              <div className="bg-slate-300 top-14 w-full rounded h-52 ">
                <ul className="px-10 py-3 gap-3">
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                  <li> dfl;fdlff;lkdgdf</li>
                </ul>
              </div>
            )}
          </div>
         
        
        </div>
      </div>

      {/* <FeedbackModal /> */}
    </div>
  );
}

export default Faq;
