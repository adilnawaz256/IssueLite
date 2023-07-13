import React from 'react'
import IssueCard from './IssueCard'
import { usefetch } from '../utils/usefetch'

const Body = () => {
    const IssueData = usefetch('https://api.github.com/repos/facebook/react/issues')
    console.log()
  return (
  <>
  <div className=''>
  {
    Array(20).fill().map(()=>{
      return(
        <>
<IssueCard/>
<hr/>
        </>
      )
    })
  }
      
      </div>
  
  
  </>
  )
}

export default Body