"use client"
import Navigation from "@/app/Navigation/Navigation";
import Subfolder from "./SubFolder/Subfolder";
import Rating from "./Rating/Rating";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="h-screen relative scrollbar-thumb-{color}">
      <div className="bg-background-color py-5 h-120 w-auto">
            <Navigation name={"Are you a teacher?"} />
        {/* <div className="bg-transparent filter w-full  fixed top-0 pt-5 pb-10">
          <div className="bg-white p-2.5 m-auto rounded-xl w-11/12 top-2.5 2xl:right-20 shadow-lg">
          </div>
        </div> */}
        <Subfolder />
      </div> 
      <Rating />

      {/* Explore +3000 Test Questions */}
      <div className="bg-main flex flex-col justify-center items-center 2xl:w-2/5 md:w-11/12 m-auto">
        <div>
          <h2 className="font-bold 2xl:text-4xl md:text-2xl text-center">
            Explore +3000 Test Questions
          </h2>
          <p className="text-gray-600 mt-3 2xl:text-xl md:text-md">
            Test questions and learning materials created by the best teachers
            in the world
          </p>
        </div>
        <div className="2xl:flex 2xl:w-full lg:w-full 2xl:justify-center md:grid md:grid-cols-5 mb-3 gap-2.5 mt-5 ">
          <div className="2xl:w-28 lg:w-20 border border-color rounded flex items-center flex-col pt-2 p-2">
            <div className="mt-2">
              <img src="tdesign_mathematics.png" alt="img" />
            </div>
            <div className="mt-8">Mathematics</div>
          </div>
          <div className="2xl:w-28 lg:w-20  border border-color rounded flex items-center flex-col pt-2 p-2">
            <div className="mt-3">
              <img src="group.png" alt="img" />
            </div>
            <div className="mt-9">Chemistry</div>
          </div>
          <div className="2xl:w-28 lg:w-20  border border-color rounded flex items-center flex-col pt-2 p-2">
            <div className="mt-4">
              <img src="Vector.png" alt="img" />
            </div>
            <div className="mt-12">English</div>
          </div>
          <div className="2xl:w-28 lg:w-20  border border-color rounded flex items-center flex-col pt-2 p-2">
            <div className="mt-2">
              <img src="Vector (1).png" alt="img" />
            </div>
            <div className="mt-11">Literature</div>
          </div>
          <div className="2xl:w-28 lg:w-20  border border-color rounded flex items-center flex-col pt-2 p-2">
            <div className="mt-2">
              <img src="Group (1).png" alt="img" />
            </div>
            <div className="mt-8">Biology</div>
          </div>
        </div>
        <div>
          <h2 className="text-color text-xl font-bold flex items-center mb-20">
            See more test questions <span className="pt-1">&gt;</span>
          </h2>
        </div>
      </div>

      {/* our services */}
      <div>
        <div>
          <h1 className="text-center font-bold 2xl:text-5xl md:text-3xl md:mb-5">Our Services</h1>
          <div className="2xl:w-4/6 md:w-11/12 m-auto text-center">
            <p className="text text-gray-600 mb-7 2xl:text-2xl md:text-md md:mb-12">
              Blend Study App offers personalized test creation, rich resource
              integration, and collaborative study rooms,
              <br className="md:hidden" /> empowering learners to prepare effectively and succeed in
              their exams
            </p>
          </div>
        </div>
        <div className="2xl:w-9/12 2xl:flex md:w-11/12 md:block m-auto gap-30 items-center mb-10">
          <div className="2xl;w-6/12 flex flex-col justify-center md:ml-10">
            <h1 className="font-bold 2xl:text-4xl md:text-3xl md:text-center">Custom Test Creation</h1>
            <p className="text-gray-600 2xl:text-xl md:text-md mt-3 md:text-center">
              Create engaging assessments across various subjects,
              <br  className="md:hidden"/> complete with levels of difficulty to match the needs of
              every <br className="md:hidden" /> learner.
            </p>
          </div>
          <div className="2xl:w-6/12">
            <img src="Group 8.png" alt="image" className="md:w-full" />
          </div>
        </div>
        
        <div className="2xl:w-9/12 md:w-11/12 flex md:flex-col m-auto gap-30 items-center mb-10">
          <div className="2xl:w-6/12 md:order-2 md:w-full">
            <img src="Group 237730.png" alt="image"  className="md:w-full" />
          </div>
          <div className="2xl:w-6/12 md:order-1 flex md:flex-col 2xl:justify-center md:justify-start text-left md:left-0 2xl:text-right">
            <h1 className="font-bold 2xl:text-4xl md:text-3xl md:text-center">Rich Resource Integration</h1>
            <p className="text-gray-600 2xl:text-xl md:text-md mt-3 md:mb-10">
              Enhance test preparation by attaching a variety of
              materials—books,
              <br  className="md:hidden"/>
              articles, videos, and links—directly to each test. This ensures
              <br className="md:hidden" />
              learners have access to all necessary resources to study
              effectively
              <br className="md:hidden" />
              and excel.
            </p>
          </div>
        </div>
        <div className="2xl:w-9/12 flex m-auto gap-30 items-center mb-40">
          <div className="w-6/12 flex flex-col justify-center">
            <h1 className="font-bold text-4xl">Collaborative Study Rooms</h1>
            <p className="text-gray-600 text-xl mt-3">
              Foster a supportive community where test takers can join study
              rooms
              <br className="md:hidden" />
              to discuss questions, share insights, and collaborate on
              preparation
              <br className="md:hidden" />
              strategies. This interactive environment boosts motivation and
              <br className="md:hidden" />
              improves understanding.
            </p>
          </div>
          <div className="w-6/12">
            <img src="Rectangle 23.png" alt="image" />
          </div>
        </div>
      </div>

      {/* why blend study */}
      <div className="w-11/12 m-auto mb-40">
        <div>
          <h1 className="text-center font-bold text-3xl mb-20">
            Why Blend Study?
          </h1>
        </div>
        <div className=" grid grid-cols-3 gap-20 w-10/12 m-auto">
          <div className="">
            <div>
              <img src="fluent-mdl2_learning-tools.png" alt="img" />
            </div>
            <h1 className="font-bold text-xl mt-2 mb-2">
              Personalized Learning Experience
            </h1>
            <p className="text-gray-600">
              Empower educators and professionals to design tailored quizzes and
              tests.
            </p>
          </div>
          <div className="">
            <div className="">
              <img src="Vector (2).png" alt="img" />
            </div>
            <h1 className="font-bold text-xl mt-2 mb-2">
              Flexible Learning Solutions
            </h1>
            <p className="text-gray-600">
              Customizable test rooms cater to various needs, allowing <br />{" "}
              test creators to monetize their expertise while test takers
              <br /> enjoy accessible, affordable learning options.
            </p>
          </div>
          <div className="">
            <div>
              <img src="Vector (3).png" alt="img" />
              <h1 className="font-bold text-xl mt-2 mb-2">
                Collaborative Community
              </h1>
              <p className="text-gray-600">
                Both test creators and takers thrive in a supportive network,
                <br />
                fostering knowledge sharing and collaboration that
                <br /> enhances overall learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features of Blend Study */}
      <div className="bg-background-color pt-14 pb-40">
        <div className="mb-22">
          <h1 className="font-bold text-2xl text-center text-white">
            Key Features of Blend Study
          </h1>
        </div>

        <div className=" flex gap-20 w-3/4 justify-center m-auto mt-20 items-center text-white">
          <div>
            <h1 className="font-bold text-3xl mb-4">Custom Test Creation</h1>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Easy design and management of personalized quizzes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Tailor tests to specific subjects and difficulty levels.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Engage audiences effectively for targeted learning
                  experiences..
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded p-10">
            {" "}
            <img src="Rectangle 1484.png" alt="" />
          </div>
        </div>
        <div className=" flex  gap-20 w-3/4 justify-center  m-auto mt-20 items-center text-white">
          <div className="bg-white rounded p-10">
            {" "}
            <img src="Rectangle 1477.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-4">
              Collaborative Study Rooms
            </h1>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Join interactive rooms for discussion and collaboration.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Share insights and study strategies with peers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-1">
              {" "}
              <div className="mt-1">
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Foster a supportive learning environment for increased
                  <br /> motivation and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-20 w-3/4 justify-center  m-auto mt-20 items-center text-white">
          <div>
            <h1 className="font-bold text-3xl mb-4">Custom Test Creation</h1>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Provide comprehensive resources for deeper understanding.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <div>
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Enhance preparation with all necessary materials in one place.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-1">
              {" "}
              <div className="mt-1">
                <img src="Vector (8).png" alt="" />
              </div>
              <div>
                <p className="text-base">
                  Attach diverse study materials (books, articles, videos,
                  links) <br /> directly to tests.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded p-10">
            {" "}
            <img src="Rectangle 1478.png" alt="" />
          </div>
        </div>
      </div>
      <Footer name="Home"/>
    </div>
  );
}
