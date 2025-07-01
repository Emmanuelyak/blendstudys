"use client";
import React, { useContext, useEffect, useRef, useMemo } from "react";
import SideBar, { SidebarItem } from "../components/my-nav/sideBar";
import { GlobalContext } from "../components/globalContext/globalContext";
import { usePathname } from "next/navigation";

export default function SideLayer() {
  const router = usePathname();
  const { activeIndex, setActiveIndex } = useContext(GlobalContext);
  const prevIndexRef = useRef(activeIndex);
  console.log(router);

  const userNav = useMemo(
    () => [
      { image: "/vector-9.png", title: "Home", url: "/dashboard" },
      {
        image: "/comment322.png",
        title: "Test Rooms",
        url: "/manage-test-rooms",
      },
      {
        image: "/fluent-people-team-20-filled-1.png",
        title: "Subscribers",
        url: "/all-subscribers",
      },
      {
        image: "/majesticons-analytics-1.png",
        title: "Analytics",
        url: "/dashboard",
      },
      {
        image: "/majesticons-analytics.png",
        title: "Revenue",
        url: "/dashboard",
      },
      { image: "/vector-11.png", title: "Profile", url: "/register" },
      {
        image: "/weui-setting-filled.png",
        title: "Settings",
        url: "/settings",
      },
    ],
    [],
  );

  useEffect(() => {
    const currentPath = router;
    const currentIndex = userNav.findIndex((nav) => nav.url === currentPath);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
      prevIndexRef.current = currentIndex;
    } else {
      setActiveIndex(prevIndexRef.current);
    }
  }, [router, setActiveIndex, userNav]);

  return (
    <div>
      <SideBar>
        {userNav.map((a, index) => (
          <SidebarItem
            onClick={() => setActiveIndex(index)}
            icon={a.image}
            text={a.title}
            key={a + index}
            active={index === activeIndex}
            alert={index === activeIndex}
            index={index}
            navigation={a.url}
          />
        ))}
      </SideBar>
    </div>
  );
}
