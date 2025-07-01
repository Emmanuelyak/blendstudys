import AdminNav from "../admin-nav"

function UserGuide() {
  return (
    <div className="relative  mb-32 md:mb-3">
              <div className="h-1/4 sticky top-0 z-50">
                <AdminNav title={"User Guide"} />
              </div>

                <div className="w-100 lg:w-10/12 2xl:w-6/12 m-auto mt-20">
                <h3 className="text-center text-sm md:text-3xl mb-5">Welcome To Blendstudy</h3>
                <p className="text-center text-xs md:text-base">This guide is designed to provide you with a clear understanding of </p>
                <p className="text-center mb-6 text-xs md:text-base">how to navigate and use the key features of Blendstudy</p>


                <div className="bg-gray-100 px-10 py-5 rounded-lg mt-4">
                    <h4 className="text-sm md:text-2xl mb-3">Getting Started</h4>
                    <p className="text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s...</p>
                </div>
                <div className="bg-gray-100 px-10 py-5 rounded-lg mt-4">
                    <h4 className="text-sm md:text-2xl mb-3">Getting Started</h4>
                    <p className="text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s...</p>
                </div>
                </div>
              
              
              </div>
  )
}
export default UserGuide