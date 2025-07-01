"use client"
import React from 'react'

export default function Modal(title, content, buttonMessage) {
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
                {title}
              </h2>

              <p className="text-gray-600 text-lg px-8">
                {content}
              </p>
              <div>
              <div className="flex justify-center items-center w-10/12 m-auto pt-8 pb-4">
            
                  <button
                    className="bg-teal-500 text-white px-6 py-2 rounded-lg text-nowrap hover:bg-teal-600 transition-colors w-full"
                    onClick={handleClose}
                    appearance="subtle"
                  >
                    {buttonMessage}
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
  )
}
