"use client";
import React, { useContext, useEffect } from "react";
import SideBar, { SidebarItem } from "./src/app/(check)/myNav/sideBar";
import { GlobalContext } from "./src/app/globalContext/globalContext";

export default function SideLayer() {
  const userNav = [
    { image: "vector-9.png", title: "Home" },
    { image: "vector-10.png", title: "Test Rooms" },
    { image: "fluent-people-team-20-filled-1.png", title: "Subscribers" },
    { image: "majesticons-analytics-1.png", title: "Analytics" },
    { image: "majesticons-analytics.png", title: "Revenue" },
    { image: "vector-11.png", title: "Profile" },
    { image: "weui-setting-filled.png", title: "Settings" },
  ];
  const { activeIndex, setActiveIndex } = useContext(GlobalContext);
  useEffect(() => {
    console.log("Active Index changed:", activeIndex);
  }, [activeIndex]);
  console.log(activeIndex);
  return (
    <div>
      <SideBar>
        {" "}
        {userNav.map((a, index) => (
          <SidebarItem
            onClick={() => setActiveIndex(index)}
            icon={a.image}
            text={a.title}
            key={a + index}
            active={index === activeIndex}
            alert={index === activeIndex}
            index={index}
          />
        ))}
      </SideBar>
    </div>
  );
}
