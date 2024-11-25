import React from 'react'

function Rating() {
  return (
    <div className="flex mt-2.5 shadow-md pb-7 pt-2.5 mb-30 bg-main  mb-40 mb:m-auto">
      <div className='flex 2xl:w-11/12 md:w-11/12 m-auto'>

        <div className="2xl:w-1/4 md:w-1/2 2xl:divide-color border-custom-rt border-border-color h-12 md:"></div>
        <div className="w-1/4 h-12   2xl:border-custom-left 2xl:border-border-color md:border-hidden">
          <h2 className="font-semibold text-lg mx-2">870</h2>
          <p className="text-gray-600 mx-2 md:text-sm">Expert users</p>
        </div>
        <div className="w-1/4 h-12  border-custom-left border-border-color">
          {" "}
          <h2 className="font-semibold text-lg mx-2">20,000+</h2>
          <p className="text-gray-600 mx-2 md:text-sm">Hours tutored</p>
        </div>
        <div className="w-1/4 h-12  border-custom-left border-border-color">
          {" "}
          <h2 className="font-semibold text-lg mx-2">298</h2>
          <p className="text-gray-600 mx-2 md:text-sm">Subjects and Courses</p>
        </div>
        <div className="w-1/4 h-12  border-custom-left border-border-color">
          {" "}
          <h2 className="font-semibold text-lg mx-2">72,920</h2>
          <p className="text-gray-600 mx-2 md:text-sm">Active students</p>
        </div>
      </div>
      </div>
  )
}

export default Rating