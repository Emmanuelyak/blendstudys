import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

function Services() {
  return (
    <div className="relative">
      <div className="w-full bg-white  fixed z-50 top-0 pt-10 pb-10">
        <div className="bg-white p-2.5 m-auto rounded-2xl w-11/12 top-10 2xl:right-20 shadow-lg ">
          <Navigation />
        </div>
      </div>

      <div className="pt-40 w-11/12 m-auto 2xl:flex  sm:block justify-center gap-20 items-start">
        <div>
          <h1 className="2xl:text-7xl md:text-4xl  text-black font-semibold leading-snug">
            Join Our Community of <br /> Knowledge Sharers and <br /> Inspire
            the Next Generation <br />
            of Learners!
          </h1>
          <div className="2xl:w-10/12 sm:w-full">
            <div className="flex relative justify-between items-start mt-5">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black -translate-y-1/2" />
              <div className="relative text-white font-bold bg-black w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
                1
              </div>
              <div className="relative relative text-black font-bold bg-sub-bg w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
                2
              </div>
              <div className="relative text-black font-bold bg-sub-bg w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
                3
              </div>
            </div>
          </div>
          <div className="2xl:flex  justify-between items-start pt-5">
            <div className="">
              <h1 className="2xl:text-2xl sm:text-md font-bold">Sign UP</h1>
              <p className="text-gray-500 sm:text-xs">
                To create your creator's profile{" "}
              </p>
            </div>
            <div className="">
              <h1 className="2xl:text-2xl sm:text-md font-bold">
                Get approved
              </h1>
              <p className="text-gray-500">
                By our team within 23 business
                <br />
                days
              </p>
            </div>
            <div className="">
              <h1 className="2xl:text-2xl sm:text-md font-bold">
                Start creating
              </h1>
              <p className="text-gray-500">
                By educating students all over the <br /> world!
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="Rectangle 1750 (2).jpg" alt="" />
        </div>
      </div>
      <div className="mt-5 mb-10 w-3/4 m-auto">
        <Button background="background-color" color="white" />
      </div>

      <div className="grid grid-cols-3 w-9/12 m-auto mt-20 pt-20 mb-20">
        <div>
          <h1 className="text-3xl font-bold">Share Your Expertise</h1>
          <p className="text-gray-500">
            Utilize your knowledge and experience to create <br /> impactful
            tests that help others succeed in their <br /> academic and
            professional journeys.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Monetization Opportunities</h1>
          <p className="text-gray-500">
            Choose to offer your test rooms for free or set <br /> subscription
            fees, allowing you to earn while you <br /> educate.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Flexible Test Design</h1>
          <p className="text-gray-500">
            Tailor test to various subjects and skill <br /> levels, ensuring
            that your content meets the <br /> diverse needs of learners.
          </p>
        </div>
      </div>

      <div className="w-9/12 flex  m-auto">
        <div className="w-6/12">
          <h1 className="text-6xl font-bold">
            Educate students from all over the world!
          </h1>
          <p className="mt-10 text-xl">
            Choose to offer your test rooms for free or set <br /> subscription
            fees, allowing you to earn while you <br /> educate.
          </p>
          <div className="flex gap-2 mt-10">
            <div className="flex gap-1 flex-col">
              <img src="mdi_star-four-points-circle.png" alt="star" />
              <img src="mdi_star-four-points-circle.png" alt="star" />
              <img src="mdi_star-four-points-circle.png" alt="star" />
              <img src="mdi_star-four-points-circle.png" alt="star" />
              <img src="mdi_star-four-points-circle.png" alt="star" />
              <img src="mdi_star-four-points-circle.png" alt="star" />
              <img src="mdi_star-four-points-circle.png" alt="star" />
            </div>
            <div className="text-gray-700">
              <h1>Empower student success</h1>
              <h1>Flexible content creation</h1>
              <h1>Monetization potential</h1>
              <h1>Rich resource integration</h1>
              <h1>Collaborative learning environment</h1>
              <h1>Performance tracking</h1>
              <h1>Professional development</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center w-6/12 m-auto">
          <img src="Rectangle 1758.png" alt="" />
          <img src="Rectangle 1757.png" alt="" />
        </div>
      </div>

      <div className="mt-5 mb-20 w-3/4 m-auto">
        <Button background="background-color" color="white" />
      </div>

      <div className="mt-30">
        <h1 className="text-center mt-30 font-bold text-3xl">
          Frequently asked questions
        </h1>
        <p className="text-center">
          Quick answers to questions you may have about Blendstudy. Can’t <br />{" "}
          find what you’re looking for?{" "}
          <span className="text-color">Get in Touch</span>
        </p>

        <div className="w-4/12 m-auto ">
          <div className="flex gap-2 items-star bg-sub-bg py-6 px-4 mt-10 rounded-xl mb-4">
            <div className="pt-1">
              <FaChevronUp />
            </div>
            <div>
              <h1 className="pb-5 text-xl font-semi-bold">What do we do?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>

          <div className="bg-sub-bg flex gap-2 py-5 px-4 rounded-xl mb-4">
          <div className="pt-1"><FaChevronDown /></div> <h1 className="text-xl font-semi-bold">What is the purpose of the platform</h1>
          </div>
          <div className="bg-sub-bg flex gap-2 py-5 px-4 rounded-xl mb-4">
          <div className="pt-1"><FaChevronDown /></div> <h1 className="text-xl font-semi-bold">How do I sign up for an account?</h1>
          </div>
          <div className="bg-sub-bg flex gap-2 py-5 px-4 rounded-xl mb-20">
          <div className="pt-1"><FaChevronDown /></div> <h1 className="text-xl font-semi-bold">How do I contact support?</h1>
          </div>

        </div>
      </div>

      <div className="w-7/12 grid grid-cols-2 bg-background-color text-white m-auto mt-20 rounded-xl">
        <div><img src="Rectangle 1760.png" alt="" /></div>
        <div className="flex flex-col start items-center ml-2 ">
          <h1 className="text-4.5x pt-12 font-bold pb-5">Get Monetized to <br /> teach online</h1>
          <p className="mb-5">Choose to offer your test rooms for free or set <br/> subscription fees, allowing you to earn while you <br/> educate.</p>
        <Button background="white" color="color" />
          
        {/* <Button background="main" color="color" text="Create a teacher profile for free"/> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
