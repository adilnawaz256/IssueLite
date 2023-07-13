import React from 'react'

const ShimmerCard = () => {
  return ( 
 <>
 {
    Array(10).fill().map(()=>{
        return(
            <>
            <div className='p-1 hover:bg-[#F6F8FA] h-28 animate-pulse mt-4'>
            <div className='flex ml-2 animate-pulse'>
              <span className='bg-gray-300 h-4 w-4 rounded-full mt-2'></span>
              <p className='ml-1 mt-2 w-96 font-semibold bg-gray-300 h-4 p-2 rounded animate-pulse'></p>
              <p className='bg-gray-300 h-2 w-20 rounded animate-pulse mt-[7px] ml-4 p-[7px] rounded-l-full rounded-r-full'></p>
            </div>
            <div className='ml-7 animate-pulse mt-2'>
              <p className='text-[#656C77] text-sm font-light bg-gray-300 h-2 w-56 rounded animate-pulse p-2'></p>
            </div>
          </div>
          <hr/>
        </>
        )
    })
 }
 </>

  )
}

export default ShimmerCard