import React from 'react'

export default function Token(props) {
  return (
    <>
      <div className="mt-4 flex items-center justify-center">
        <div className="w-4/5 lg:w-4/5 xl:w-4/5 max-w-screen-sm rounded-lg shadow px-6 py-3 rounded-md flex justify-between items-center">
          <p className="text-center">{"Participant Token:\t " + (props.token!==null?props.token[0]:"Not Yet Generated")}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zm2-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4zm1 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <div className="w-4/5 lg:w-4/5 xl:w-4/5 max-w-screen-sm  rounded-lg shadow px-6 py-3 rounded-md flex justify-between items-center">
          <p className="text-center">{"Judge Token:\t " + (props.token!==null?props.token[1]:"Not Yet Generated")}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zm2-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4zm1 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <div className="w-4/5 lg:w-4/5 xl:w-4/5 max-w-screen-sm  rounded-lg shadow px-6 py-3 rounded-md flex justify-between items-center">
          <p className="text-center">{"Total number of participants:\t " + (props.part_count!==null?props.part_count:"Not Yet Decided")}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zm2-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4zm1 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
