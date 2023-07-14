import React from 'react'
import  "./css/IssueComponent.css"
import { useParams } from 'react-router-dom'

const IssueComponents = () => {
  const {number} = useParams()

  return (
    <div
    className='issue-container shadow-xl'
    >
<h3 className='font-bold text-[#FACA05] text-xl hover:text-black'>
  <span className='bg-yellow-500 text-white font-semibold px-2 py-1 rounded mr-2'>
    Issue
  </span>
  This is issue number {number}
</h3>

    </div>
  )
}

export default IssueComponents