import React from "react";
import Image from "next/image";

function Footer(props) {
  return (
    <div className="w-full">
      {/* What Our Users Say About Us */}
      <div className="pt-30 2xl:mb-20 sm:mb-10">
        <div className="text-center 2xl:pt-20 sm:pt-20 2xl:text-3xl font-bold sm:text-xl mb-20">
          {props.name === "Home"
            ? "What Our Users Say About Us"
            : "What Teachers Say About Us"}
        </div>

        <div className="2xl:grid 2xl:grid-cols-3 sm:block w-100 2xl:gap-10 pb-10 2xl:pl-5 ml-2">
          <div className="pl-5 bg-sub-bg rounded-md pt-5 pb-10 xs:mb-5">
            <div className="flex pb-5">
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
            </div>

            <div className="text-lg lg:text-2xl">
              “Lorem Ipsum has been the industry&apos;s
              <br /> standard dummy text ever since the
              <br /> 1500s.”
            </div>
            <div className="flex  items-center gap-5 pt-5">
              <div>
                <Image width={60} height={100} src="/ellipse-12.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold">James Adams</h3>
                <p>Founder and CEO at Build in Public</p>
              </div>
            </div>
          </div>
          <div className="pl-5 bg-sub-bg rounded-md pt-5 pb-10">
            <div className="flex pb-5">
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
            </div>

            <div className="text-lg lg:text-2xl">
              “Lorem Ipsum has been the industry&apos;s
              <br /> standard dummy text ever since the
              <br /> 1500s.”
            </div>
            <div className="flex items-center gap-5 pt-5">
              <div>
                <Image width={60} height={100} src="/ellipse-12.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold">James Adams</h3>
                <p>Founder and CEO at Build in Public</p>
              </div>
            </div>
          </div>
          <div className="pl-5 bg-sub-bg rounded-md pt-5 pb-10">
            <div className="flex pb-5">
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
            </div>

            <div className="text-lg lg:text-2xl">
              “Lorem Ipsum has been the industry&apos;s
              <br /> standard dummy text ever since the
              <br /> 1500s.”
            </div>
            <div className="flex items-center gap-5 pt-5">
              <div>
                <Image width={60} height={100} src="/ellipse-12.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold">James Adams</h3>
                <p>Founder and CEO at Build in Public</p>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:grid 2xl:grid-cols-3 sm:flex sm:flex-col  w-100 m-auto 2xl:gap-10 sm:gap-3 2xl:ml-20 sm:ml-2 pb-10">
          <div className="pl-5 bg-sub-bg rounded-md pt-5 pb-10">
            <div className="flex pb-5">
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
            </div>

            <div className="text-lg lg:text-2xl">
              “Lorem Ipsum has been the industry&apos;s
              <br /> standard dummy text ever since the
              <br /> 1500s.”
            </div>
            <div className="flex items-center gap-5 pt-5">
              <div>
                <Image width={60} height={100} src="/ellipse-12.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold">James Adams</h3>
                <p>Founder and CEO at Build in Public</p>
              </div>
            </div>
          </div>
          <div className="pl-5 bg-sub-bg rounded-md pt-5 pb-10">
            <div className="flex pb-5">
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
            </div>

            <div className="text-lg lg:text-2xl">
              “Lorem Ipsum has been the industry&apos;s
              <br /> standard dummy text ever since the
              <br /> 1500s.”
            </div>
            <div className="flex items-center gap-5 pt-5">
              <div>
                <Image width={60} height={100} src="/ellipse-12.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold">James Adams</h3>
                <p>Founder and CEO at Build in Public</p>
              </div>
            </div>
          </div>
          <div className="pl-5 bg-sub-bg rounded-md pt-5 pb-10">
            <div className="flex pb-5">
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image
                width={20}
                height={100}
                src="/star-6.png"
                alt="active star"
              />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
              <Image width={20} height={100} src="/star-5.png" alt="star" />
            </div>

            <div className="text-lg lg:text-2xl">
              “Lorem Ipsum has been the industry&apos;s
              <br /> standard dummy text ever since the
              <br /> 1500s.”
            </div>
            <div className="flex items-center gap-5 pt-5">
              <div>
                <Image width={60} height={100} src="/ellipse-12.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold">James Adams</h3>
                <p>Founder and CEO at Build in Public</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-background-color text-white py-20">
        <div className="flex justify-between w-9/12 m-auto">
          <div className="flex gap-40">
            <div>
              <h1 className="text-xl ">Navigation</h1>
              <div className="text-md flex flex-col gap-2 mt-5">
                <p>Benefits</p>
                <p>Features</p>
                <p>Testimonials</p>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Terms of Service</h1>
              <div className="text-md flex flex-col gap-2 mt-5">
                <p>Our Blog</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-left text-xl">
              Subscribe to newsletters from <br /> Blend Study{" "}
            </h1>
            <div className="bg-white p-1 rounded mt-10">
              <input
                className="outline-none text-black"
                type="text"
                placeholder="Type Your Email"
              />{" "}
              <button className="bg-background-color py-2 px-5 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-9/12 m-auto items-center">
          <div className="mt-5">
            <h1 className="text-xl mb-2">
              Follow Us On
            </h1>
            <div className="flex gap-4 h-h-12 items-center ">
              <div className="h-8 w-7">
                <Image
                  width={20}
                  height={40}
                  src="/vector-6.png"
                  alt="instagram"
                />
              </div>
              <div className="h-8 w-8">
                <Image
                  width={20}
                  height={40}
                  src="/group-2.png"
                  alt="facebook"
                />
              </div>
              <div className="h-8 w-7 mt-1">
                <Image
                  width={15}
                  height={40}
                  src="/vector-5.png"
                  alt="twitter"
                />
              </div>
              <div className="h-8 w-7">
                <Image
                  width={20}
                  height={40}
                  src="/vector-4.png"
                  alt="whatsapp"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div>
              <p className="text-lg mb-2">
                Copyright @ 2024. All right reserved
              </p>
            </div>
            <div className="flex mt-10">
              <p>Web in Nigeria</p>{" "}
              <Image
                width={40}
                height={100}
                src="/flag-1ae9b5841.png"
                alt="flag"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
