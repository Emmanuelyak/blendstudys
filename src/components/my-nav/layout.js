import GlobalProvider from "@/components/globalContext/globalContext";
import SideLayer from "@/app/side-layer";

// const userNav = [
//   { image: "vector-9.png", title: "Home" },
//   { image: "vector-10.png", title: "Test Rooms" },
//   { image: "fluent-people-team-20-filled-1.png", title: "Subscribers" },
//   { image: "majesticons-analytics-1.png", title: "Analytics" },
//   { image: "majesticons-analytics.png", title: "Revenue" },
//   { image: "vector-11.png", title: "Profile" },
//   { image: "weui-setting-filled.png", title: "Settings" },
// ];
export const metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <main className="flex">
            <SideLayer />
            {/* <SideBar>
            {userNav.map((a, b) => (
              <SidebarItem
                onClick={() => setActiveIndex(b)}
                icon={a.image}
                text={a.title}
                key={a + b}
                active={b === activeIndex}
                alert={b === activeIndex}
              />
              // <div
              //   className="flex gap-2 2xl:gap-5 md:gap-1 2xl:items-end md:items-center mb-5"
              //   key={a + b}
              // >
              //   <div className="2xl:w-7 ">
              //     <img src={a.image} alt="" width={"100%"} />
              //   </div>
              //   <h6 className="text-sm 2xl:text-md text-nowrap font-normal">
              //     {a.title}
              //   </h6>
              // </div>
            ))}
          </SideBar> */}

            <div>{children}</div>
          </main>
        </GlobalProvider>
      </body>
    </html>
  );
}
