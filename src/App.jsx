import React, { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './components/main';
import './index.css';
import Pagination from './components/Pagination';
import { usefetch } from './utils/usefetch';
import IssueComponents from './components/IssueComponents';



const URL = "https://api.github.com/repos/facebook/react/issues?per_page=200";

function App() {
  const GithubResponseData = usefetch(URL);
  const IssueRes = GithubResponseData?.ApiData?.data
  const [currentPage , setCureentpage] = useState(1)
  const [postsPerPage , setPostsPerPage] = useState(10)
  if (!IssueRes) {
    // Handle loading state or error
    return <div>Loading...</div>;
  }
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage;
 const currentPosts=  Object.values(IssueRes).slice(firstPostIndex , lastPostIndex)
//  console.log(currentPosts);
  return (
    <>
      <div className="flex justify-center mt-8">
        <Main IssueData={currentPosts} />
      </div>  
      <div className='flex justify-center mb-10 mt-4'>
      <Pagination 
      totalPosts={GithubResponseData?.ApiData?.data.length}
       postsPerPage= {postsPerPage} 
       setCureentpage={setCureentpage}
      />
</div>

    </>
  );
}


const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"issues/:number",
    element:<IssueComponents/>
  }
])


export default Approuter