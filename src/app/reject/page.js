"use client"
import React from 'react'

export default function Reject() {
  return (
   
    <div className="fixed inset-0 bg-sub-bg1 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
      <button className="absolute right-4 top-4 text-black-400 hover:text-black">
        X
      </button>

      <div className="text-center space-y-4">

        <h2 className="text-red-500 text-xl font-semibold pt-5">
          Approved!
        </h2>

        <p className="text-gray-600 ">
        We&apos;re sorry, but your profile has been rejected. Your uploaded ID was not clear enough. Please provide a clearer and more legible photo of your identification document and resubmit
        </p>
        
        <div className="flex justify-center items-center space-y-3 pt-10">
         
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

