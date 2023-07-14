import React from 'react'
import { Link } from 'react-router-dom'

const IssueCard = ({issues}) => {

  const {title ,number ,  labels , user} = issues
  return (
    <div className='p-1 hover:bg-[#F6F8FA]'>
    <div className='flex ml-2'>
    <span><i className="fa fa-circle-exclamation mt-3 m-1 text-sm text-[#1B7F36]"></i></span>
   <p className='ml-1 mt-2 font-semibold'>{title}<span className='ml-1 p-1 rounded-l-full bg-[#D5C4F9] rounded-r-full text-[10px] '>{labels[0]?.name}</span></p>
    <p></p>
    </div>
    <div className='ml-8'>
    <p className='text-[#656C77] text-sm font-light'><span className=''>#{number}</span> Opened by <span>{user?.login}</span></p>
    </div>
    </div>
  )
}

export default IssueCard