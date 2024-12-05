  const userNav = [
    { image: "Vector (9).png", title: "Home" },
    { image: "Vector (10).png", title: "Test Rooms" },
    { image: "fluent_people-team-20-filled (1).png", title: "Subscribers" },
    { image: "majesticons_analytics (1).png", title: "Analytics" },
    { image: "majesticons_analytics.png", title: "Revenue" },
    { image: "Vector (11).png", title: "Profile" },
    { image: "weui_setting-filled.png", title: "Settings" },
  ];


export const metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full">
          <div className="hidden border bborder-gray-50 2xl:w-2/12 sm:w-2/12 md:block h-full">
            <nav className="2xl:flex 2xl:flex-col justify-center items-center mb-14 pt-5 relative text-center">
              <div className="2xl:w-40 md:w-20 mb-2 m-auto">
                <img src="Ellipse 11.png" alt="img" width={"100%"} />
              </div>
              <p className="2xl:text-xl md:text-md">Michelle Ajoma</p>
              <p className="2xl:text-sm md:text-2">Chemistry Teacher</p>
            </nav>
            <div className="h-4/6">
              <div className="w-10/12 m-auto h-full">
                {userNav.map((a, b) => (
                  <div
                    className="flex gap-2 2xl:gap-5 md:gap-1 2xl:items-end md:items-center mb-5"
                    key={a + b}
                  >
                    <div className="2xl:w-7 ">
                      <img src={a.image} alt="" width={"100%"} />
                    </div>
                    <h6 className="text-sm 2xl:text-md text-nowrap font-normal">
                      {a.title}
                    </h6>
                  </div>
                ))}
                <div className="flex 2xl:gap-3 md:gap-1 items-center md:mb-20 2xl:mt-48 md:mt-20 ">
                  <div className="2xl:w-7">
                    <img src="Vector (18).png" alt="" width={"100%"} />
                  </div>
                  <h6 className="2xl:text-md text-nowrap font-normal">Logout</h6>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          {/* Main Content */}
          <main className="w-full 2xl:flex-1 2xl:overflow-y-auto lg:flex-1 lg:overflow-y-auto md:overflow-y-auto md:flex-1">
            {/* Header */}
            {/* <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
  

            {/* Page Content */}
             
            <div className="relative">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}