"use client"
import Image from "next/image";
import React,{useState} from "react";
import { Modal } from "rsuite";

export const FeedbackModal = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () =>{
        setOpen(!open)
    }
  return (
    <div>
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
              How are you feeling?
            </h2>

            <p className="text-gray-600 text-lg px-8">
              Your Feedback is valuable in helping us better understand your
              needs and our Services accordingly
            </p>

            <div className="flex justify-between items-center w-10/12 m-auto pt-8 pb-4">
              <div><Image width={100} height={100} src="/tops-up.png" alt="" /></div>
              <div><Image width={100} height={100} src="/heart.png" alt="" /></div>
              <div><Image width={100} height={100} src="/clap.png" alt="" /></div>
              <div><Image width={100} height={100} src="/wow.png" alt="" /></div>
            </div>
            <div className="flex justify-between items-center w-10/12 m-auto pt-8 pb-4 outline-none">
                <textarea className="h-28 w-full rounded-sm bg-gray-100"></textarea>
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
  );
};
