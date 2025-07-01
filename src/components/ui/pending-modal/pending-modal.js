"use client"
import React from 'react'
import { Modal } from 'rsuite';

export default function PendingModal( ) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
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
        </Modal>
    </div> )
}
