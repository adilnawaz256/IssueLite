import React from 'react'

const IssueCard = () => {
  return (
    <div className='p-1 hover:bg-[#F6F8FA]'>
    <div className='flex ml-2'>
    <span><i className="fa fa-circle-exclamation mt-3 m-1 text-sm text-[#1B7F36]"></i></span>
    <p className='ml-1 mt-2 font-semibold'>Bug: useId generates a new different ID on second render of Strict Mode before un-mount<span className='ml-1 p-1 rounded-l-full bg-[#D5C4F9] rounded-r-full text-[10px] '>Status: Unconfirmed</span></p>
    <p></p>
    </div>
    <div className='ml-8'>
    <p className='text-[#656C77] text-sm font-light'><span className=''>#2717</span> Opened by <span>RajaTheKing826</span></p>
    </div>
    </div>
  )
}

export default IssueCard