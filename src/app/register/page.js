"use client";
import { Container, Dropdown } from "rsuite";
import React from "react";
import { Modal } from "rsuite";
function Register() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="relative">
      <div className="absolute top-52">
        <Modal backdrop="static" size={"sm"} open={open} onClose={handleClose}>
          <Modal.Title>
            <button
              className="absolute right-4 top-4 text-black-400 hover:text-black"
              onClick={handleClose}
            >
              X
            </button>
          </Modal.Title>
          <Modal.Body>
            <div className="text-center space-y-4">
              <h2 className="text-blue-500 text-3xl font-semibold pt-5">
                Pending!
              </h2>

              <p className="text-gray-600 text-lg px-8">
                Your profile is currently under review, estimated verification
                time is 5 business days
              </p>

              <div className="flex justify-between items-center w-10/12 m-auto pt-8 pb-4">
                <a href="#" className="text-red-500 text-sm hover:underline">
                  Need Help? Contact Support.
                </a>
                <div>
                  <button
                    className="bg-teal-500 text-white px-6 py-2 rounded-lg text-nowrap hover:bg-teal-600 transition-colors w-full"
                    onClick={handleClose}
                    appearance="subtle"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer> */}
        </Modal>
      </div>
      <div className="lg:w-9/12 md:w-100 m-auto lg:bg-bg2 md:bg-bg2 sm:bg-bg2 2xl:h-ht-1 sm:h-ht-1 bg-no-repeat bg-cover mt-7">
        <div className="flex w-w-main justify-between  items-end m-auto">
          <div className="relative w-wh1 h-ht-1 mt-10 rounded-full">
            <img className="w-wh1 h-ht-1" src="ellipse-11.png" alt="pic" />
            <div className="absolute bottom-0 right-5">
              <img className="" src="group-43.png" alt="" />
            </div>
          </div>
          <div className=" mb-5">
            <img src="group-43.png" alt="" />
          </div>
        </div>
      </div>

      <div className="lg:w-9/12 md:w-100 m-auto mt-40 sm:w-100">
        <div className="w-full grid 2xl:grid-cols-2 sm:grid-cols-1 gap-10 mb-5">
          <div className="w-full space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 text-black w-full py-3 rounded-lg px-10 outline-none text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="Certificatiions">
                Certificatiions
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 text-black w-full py-3 rounded-lg px-10 outline-none text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-2 sm:grid-cols-1  gap-10 mb-5">
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label htmlFor="" className="text-lg">
                Professional Title
              </label>
              <Container>
                <Dropdown
                  className="dropdown w-full rounded-lg outline-none"
                  title="Select an option"
                  size="lg"
                />
              </Container>
            </div>
            <div className=" flex flex-col">
              <label className="text-lg" htmlFor="fullName">
                Educational Background
              </label>
              <Container>
                <Dropdown
                  className="dropdown w-full rounded-lg outline-none"
                  title="Select an option"
                  size="lg"
                />
              </Container>
            </div>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label htmlFor="" className="text-lg">
                Experience
              </label>
              <textarea
                className="w-full bg-gray-50 rounded-lg h-36 outline-none p-5 text-base"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-2 sm:grid-cols-1 gap-10 mb-5">
          <div className="w-full space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="fullName">
                Occupation
              </label>
              <Container>
                <Dropdown
                  className="dropdown w-full rounded-lg outline-none"
                  title="Select an option"
                  size="lg"
                />
              </Container>
            </div>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="Certificatiions">
                X (URL)
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 text-black w-full py-3 rounded-lg px-10 outline-none text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-2 sm:grid-cols-1 gap-10 mb-5">
          <div className="w-full space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="fullName">
                Specialization
              </label>
              <Container>
                <Dropdown
                  className="dropdown w-full rounded-lg outline-none"
                  title="Specialization"
                  size="lg"
                />
              </Container>
            </div>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="Certificatiions">
                LinkedIn (URL)
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 text-black w-full py-3 rounded-lg px-10 outline-none text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-2 sm:grid-cols-1 gap-10 mb-5">
          <div className="w-full space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="fullName">
                Instagram (URL)
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 text-black w-full py-3 rounded-lg px-10 outline-none text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label className="text-lg" htmlFor="Certificatiions">
                Facebook (URL)
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 text-black w-full py-3 rounded-lg px-10 outline-none text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-2 sm:grid-cols-1 gap-10 mb-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Upload Additional Document</label>
            <div className="spacing-y-6 h-48 bg-sub-bg1 border-2 border-dashed border-color rounded-lg">
              <div className="flex flex-col items-center justify-center h-48 space-y-4">
                <p className="text-gray-600 text-center">
                  Drag & drop your files here
                </p>
                <p className="text-gray-500 text-center">OR</p>
                <div>
                  <label className="cursor-pointer">
                    <input type="file" className="hidden" />
                    <span className="px-4 py-2 text-sm text-cyan-500 border border-cyan-500 rounded-md hover:bg-cyan-50 transition-colors duration-200 text-base">
                      Browse files
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col gap-1">
              <label htmlFor="" className="text-lg">
                Experience
              </label>
              <textarea
                className="w-full bg-gray-50 rounded-lg h-48 outline-none p-5 text-base"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-9/12  md:w-100  m-auto mt-20 pb-30 mb-40">
        <div className="mb-30 flex justify-end gap-10 w-full">
          <button className="bg-white border border-color text-nowrap py-4 px-12 rounded-md">
            Cancel
          </button>
          <button
            className="bg-background-color text-nowrap py-4 px-12 rounded-md text-white"
            onClick={() => handleOpen("md")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
