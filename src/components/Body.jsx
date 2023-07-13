import React from 'react'
import IssueCard from './IssueCard'
import { usefetch } from '../utils/usefetch'
import ShimmerCard from './ShimmerCard'

const Body = () => {
  const IssueData = usefetch('https://api.github.com/repos/facebook/react/issues')
  const { data } = IssueData.ApiData
  return (
    <>
      <div className=''>

        {
          (!data) ? <ShimmerCard /> : data.map((ele) => {

            return (
              <>
                <IssueCard issues={ele} />
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