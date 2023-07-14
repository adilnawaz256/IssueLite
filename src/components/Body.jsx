import React, { useState } from 'react'
import IssueCard from './IssueCard'
import ShimmerCard from './ShimmerCard'
import { Link } from 'react-router-dom'


const Body = ({IssuesDatas}) => {

  return (
    <>
      <div className=''>

        {
          (!IssuesDatas) ? <ShimmerCard /> : IssuesDatas?.map((ele) => {

            return (
              <>
             <Link to={`issues/${ele.number}`}>
                <IssueCard issues={ele}  key={ele.id}/>
                </Link>
                <hr />
              </>
            )

          })

        }
      </div>
    </>
  )
}

export default Body