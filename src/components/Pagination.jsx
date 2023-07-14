import React from 'react'

const Pagination = ({totalPosts ,postsPerPage , setCureentpage}) => {
  let pages = []
  console.log(totalPosts);
  for(let i=1; i<= Math.ceil(totalPosts / postsPerPage);i++){
    pages.push(i)
  }
  return (
    <div className=''>
       {
        pages.map((page , index)=>{
          return(
            <button key={index} className='px-4 py-2 m-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 ' onClick={()=>{
              setCureentpage(page)
            }}>{page}</button>
          )
        })
       }
    </div>
  )
}

export default Pagination