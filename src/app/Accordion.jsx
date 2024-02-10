"use client"
import React, { useState } from 'react'
const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <>
      <div className="py-2" style={{ borderTop: '1px solid #EEE' }}>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between  w-full"
        >
          <span
            className="text-justify mt-3 mb-4  text-dark-400 text-base"
            style={{  fontWeight: '600' }}
          >
            {title}
          </span>

          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <svg
            className="fill-black-400 shrink-0 ml-8 mt-3 mb-4"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
        <div
      
          className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-gray-400 text-sm ${
            accordionOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden text-sm text-slate-900">{answer}</div>
        </div>
      </div>
    </>
  )
}

export const TestInclude = ({ value }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-md pr-6 px-3 py-1.5">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex  justify-between  w-full"
        >
          <span
            className="text-justify mt-3 mb-4 text-sm   md:text-[15px]"
            style={{  fontWeight: '400' }}
          >
            {value?.name}
          </span>

          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <svg
            className="fill-black-400 shrink-0 ml-8 mt-3 mb-2"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
         
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
        <div
           
          className={`grid  overflow-hidden transition-all duration-300 ease-in-out text-slate-900  text-sm ${
            accordionOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="flex gap-1 overflow-hidden    text-xs ">
            <QuestionIcon className="ml-1 h-4 w-4 text-slate-900" />
            <p className="flex-shrink-0">{value.question} Questions </p>
            <p>|</p>
            <p className="flex-shrink-0">{value.marks} Marks </p>
            <p>|</p>
            <p className="flex-shrink-0">{value.duration} Mins </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion
