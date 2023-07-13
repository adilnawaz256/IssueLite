import React from 'react'
import IssueCard from './IssueCard'
import { usefetch } from '../utils/usefetch'

let count = 0
const Body = () => {
    const IssueData = usefetch('https://api.github.com/repos/facebook/react/issues')
    // console.log(IssueData)
    const {data} = IssueData.ApiData
    // console.log(data);
    if (!data) return <h1>Laoding...</h1>
    console.log(count);
   return (
  <>
  <div className=''>
  {
    data.map((ele)=>{
    
      return(
        <>
<IssueCard issues ={ele}/>
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