"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import AdminNav from "../../../components/admin-nav";
import { useState } from "react";

function Faqs() {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [section4, setSection4] = useState(false);
  return (
    <div className="relative mb-32 md:mb-3">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"FAQs"} />
      </div>
      <div className="w-100 lg:w-10/12 2xl:w-6/12 m-auto mt-20">
        <div>
          <h4 className="text-center mb-6">Frequently Asked Questions</h4>
          <p className="text-center">
            Quick answers to questions you may have about Blendstudy. Can&apos;t{" "}
          </p>
          <p className="text-center">
            find what you’re looking for?
            <span className="text-color"> Get in Touch</span>
          </p>
        </div>

        <div className="bg-gray-100 text-black px-10 py-5 rounded-lg mt-4">
          <div
            className="flex gap-3 items-center mb-3"
            onClick={() => setSection1(!section1)}
          >
            <div>{section1 ? <ChevronUp /> : <ChevronDown />}</div>
            <div>
              <h5 className="text-sm md:text-xl">What do we do?</h5>
            </div>
          </div>
          {section1 && (
            <div>
              <p className="text-xs md:text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </p>
            </div>
          )}
        </div>
        <div className="bg-gray-100 text-black px-10 py-5 rounded-lg mt-4">
          <div
            className="flex gap-3 items-center mb-3"
            onClick={() => setSection2(!section2)}
          >
            <div>{section2 ? <ChevronUp /> : <ChevronDown />}</div>
            <div>
              <h5 className="text-sm md:text-xl">
                What is the purpose of the platform
              </h5>
            </div>
          </div>
          {section2 && (
            <div>
              <p className="text-xs md:text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </p>
            </div>
          )}
        </div>
        <div className="bg-gray-100 text-black px-10 py-5 rounded-lg mt-4">
          <div
            className="flex gap-3 items-center mb-3"
            onClick={() => setSection3(!section3)}
          >
            <div>{section3 ? <ChevronUp /> : <ChevronDown />}</div>
            <div>
              <h5 className="text-sm md:text-xl">
                How do I sign up for an account?
              </h5>
            </div>
          </div>
          {section3 && (
            <div>
              <p className="text-xs md:text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </p>
            </div>
          )}
        </div>
        <div className="bg-gray-100 text-black px-10 py-5 rounded-lg mt-4">
          <div
            className="flex gap-3 items-center mb-3"
            onClick={() => setSection4(!section4)}
          >
            <div>{section4 ? <ChevronUp /> : <ChevronDown />}</div>
            <div>
              <h5 className="text-sm md:text-xl">How do I contact support?</h5>
            </div>
          </div>
          {section4 && (
            <div>
              <p className="text-xs md:text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Faqs;
