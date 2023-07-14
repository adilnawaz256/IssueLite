import React from 'react'
import Header from './Header'
import Body from './Body'
import './css/App.css'
const  Main= ({IssueData}) => {

  return (
    <div className='main-header h-full' >
            <Header/>
            <Body IssuesDatas={IssueData}/> 
    </div>
  )
}

export default Main