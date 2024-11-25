import React from 'react'

function Rating() {
  return (
    <div className="flex mt-2.5 shadow-md pb-7 pt-2.5 mb-30 bg-main mb-40">
        <div className="w-1/4 divide-color h-12"></div>
        <div className="w-1/4 h-12   border-custom-left border-border-color">
          <h2 className="font-semibold text-lg mx-2">870</h2>
          <p className="text-gray-600 mx-2">Expert users</p>
        </div>
        <div className="w-1/4 h-12  border-custom-left border-border-color">
          {" "}
          <h2 className="font-semibold text-lg mx-2">20,000+</h2>
          <p className="text-gray-600 mx-2">Hours tutored</p>
        </div>
        <div className="w-1/4 h-12  border-custom-left border-border-color">
          {" "}
          <h2 className="font-semibold text-lg mx-2">298</h2>
          <p className="text-gray-600 mx-2">Subjects and Courses</p>
        </div>
        <div className="w-1/4 h-12  border-custom-left border-border-color">
          {" "}
          <h2 className="font-semibold text-lg mx-2">72,920</h2>
          <p className="text-gray-600 mx-2">Active students</p>
        </div>
      </div>
  )
}

export default Rating