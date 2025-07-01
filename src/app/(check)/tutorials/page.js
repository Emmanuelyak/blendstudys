import Image from "next/image";
import AdminNav from "../admin-nav";

function Tutorial() {
  return (
    <div className="relative mb-32 md:mb-3">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Tutorials"} />
      </div>
      <div className="w-100 lg:w-10/12 2xl:w-6/12 m-auto">
        <div>
          <h3>Tutorials</h3>
        </div>

        <div className="bg-gray-100 w-full md:flex md:items-center gap-5 px-10 py-5 rounded-md mb-4 mt-4">
          <div className="p-6 flex justify-center items-center md:block bg-sub-bg w-18">
            <div className="w-10">
              <Image
                width={100}
                height={100}
                src="/comment322.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4">What is the purpose of the platform</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&lsquo;s standard dummy text ever since the 1500s...
            </p>
          </div>
        </div>
        <div className="bg-gray-100 w-full md:flex md:items-center gap-5 px-10 py-5 rounded-md mb-4 mt-4">
          <div className="p-6 flex justify-center items-center md:block bg-sub-bg w-18">
            <div className="w-10">
              <Image
                width={100}
                height={100}
                src="/comment322.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4">What is the purpose of the platform</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&lsquo;s standard dummy text ever since the 1500s...
            </p>
          </div>
        </div>
        <div className="bg-gray-100 w-full md:flex md:items-center gap-5 px-10 py-5 rounded-md mb-4 mt-4">
          <div className="p-6 flex justify-center items-center md:block bg-sub-bg w-18">
            <div className="w-10">
              <Image
                width={100}
                height={100}
                src="/comment322.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4">What is the purpose of the platform</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&lsquo;s standard dummy text ever since the 1500s...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tutorial;
