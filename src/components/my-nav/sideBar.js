"use client";

import React, { useEffect } from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Image from "next/image";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const smallScreen = useMediaQuery({
    query: "(max-width: 3px)",
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 830px)");

    const handleResize = (e) => {
      if (e.matches) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };
    handleResize(mediaQuery);

    // Add listener
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  // useEffect(() =>{
  //   if(smallScreen){
  //     setExpanded(current => !current)
  //   }else{
  //     setExpanded(true)
  //   }
  // },[smallScreen])

  return (
    <aside className="h-full md:h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-start">
          <div
            className={`overflow-hidden transition-all mb-2 m-auto ${
              expanded ? "2xl:w-40 md:w-20" : "w-0"
            }`}
          >
            <Image width={100} height={100} src="/ellipse-11.png" alt="img" />
          </div>

          {/* <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? null : <ChevronLast />}
          </button> */}
        </div>

        {expanded ? (
          <div className="text-center mb-10">
            <p className="2xl:text-xl md:text-md">Michelle Ajoma</p>
            <p className="2xl:text-sm md:text-2">Chemistry Teacher</p>
          </div>
        ) : (
          ""
        )}

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-2 md:px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className=" flex p-3 mb-10 ml-3">
          <div className="w-4 md:w-6">
            <Image width={100} height={100} src="/vector-18.png" alt="" />
          </div>

          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                expanded ? "w-52 ml-3 " : "w-0"
              } mb-12  md:mb-1
          `}
          >
            <div className="leading-4 text-base">logout</div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  onClick,
  icon,
  text,
  active,
  alert,
  index,
  navigation,
}) {
  const { expanded } = useContext(SidebarContext);
  console.log(navigation);

  return (
    <div className={`${index === 0 ? "mt-10 lg:mt-0" : "mt-0"}`}>
      <Link href={navigation} className="no-underline hover:no-underline">
        <li
          onClick={onClick}
          className={`
        relative flex py-2 px-3 md:my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-sub-bg text-color" : "hover:bg-sub-bg text-gray-600"}
    `}
        >
          <div className=" w-4 md:w-6">
            <Image width={100} height={100} src={icon} alt="" />
          </div>
          <div
            className={`overflow-hidden transition-all text-nowrap pt-1 ${
              expanded ? "w-52 ml-3 mb-4 text-base" : "w-0"
            }`}
          >
            {text}
          </div>
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-background-color ${
                expanded ? "" : "top-2"
              }`}
            />
          )}

          {!expanded && (
            <div
              className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-sub-bg text-black text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50 text-nowrap
      `}
            >
              {text}
            </div>
          )}
        </li>
      </Link>
    </div>
  );
}
