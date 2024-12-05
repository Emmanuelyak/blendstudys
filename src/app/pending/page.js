"use client"
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import React from 'react'

function Pending() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="fixed inset-0 bg-sub-bg1 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
      <button className="absolute right-4 top-4 text-black-400 hover:text-black">
        X
      </button>

      <div className="text-center space-y-4">

        <h2 className="text-blue-500 text-xl font-semibold pt-5">
          Pending!
        </h2>

        <p className="text-gray-600">
          Your profile is currently under review, estimated verification time is 5 business days
        </p>
        
        <div className="flex justify-between items-center space-y-3 mt-4">
          <a href="#" className="text-red-500 text-sm hover:underline">
            Need Help? Contact Support.
          </a>
          <div>

          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg text-nowrap hover:bg-teal-600 transition-colors w-full">
            Continue
          </button>
          </div>
        </div>
      </div>
    </div>
  
    
  </div>
    
  
  )
}

export default Pending