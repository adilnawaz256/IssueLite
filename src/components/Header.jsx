import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-[#F6F8FA] h-11 flex justify-between'>
      <div className=''>
        <p className='ml-2'><i className="fa fa-circle-exclamation mt-3 m-1 text-sm"></i><span className='mr-1 text-sm font-semibold'>1024</span>Open<span><i className="fa fa-check ml-2 text-[#656C77] "></i></span><span className='m-3 font-light'>11303</span><span className='text-[#999FA5]'>Closed</span></p>
      </div>
      <div className=''>
        <ul className='flex justify-end '>
          <li className='p-2 text-[#999FA5]'>Author</li>
          <li className='p-2 text-[#999FA5]'>Label</li>
          <li className='p-2 text-[#999FA5]'>Projects</li>
          <li className='p-2 text-[#999FA5]'>Milestones</li>
          <li className='p-2 text-[#999FA5]'>Assignee</li>
          <li className='p-2 text-[#999FA5]'>Sort</li>
        </ul>
      </div>
    </div>
  )
}

export default Header