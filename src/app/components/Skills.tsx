import React from 'react'

function Skills() {
  return (
    <div id="Skills" className='bg-slate-100'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-20">
            My Skills
            <br className="hidden sm:block" />
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  HTML/CSS
                </h2>
                <div className='h-1 w-full bg-slate-400 relative'>
                  <div className=' absolute h-1 w-[100%] bg-blue-800'></div>
                </div>
                <p className='text-right font-bold text-blue-500'>100%</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  JavaScript/TypeScript
                </h2>
                <div className='h-1 w-full bg-slate-400 relative'>
                  <div className=' absolute h-1 w-[70%] bg-blue-800'></div>
                </div>
                <p className='text-right font-bold text-blue-500'>70%</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  NextJS
                </h2>
                <div className='h-1 w-full bg-slate-400 relative'>
                  <div className=' absolute h-1 w-[60%] bg-blue-800'></div>
                </div>
                <p className='text-right font-bold text-blue-500'>60%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Skills


