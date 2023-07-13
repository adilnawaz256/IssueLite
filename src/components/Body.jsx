import React from 'react'
import IssueCard from './IssueCard'
import { usefetch } from '../utils/usefetch'

const Body = () => {
    const GitHubissu = usefetch('https://api.github.com/repos/facebook/react/issues')
    console.log(GitHubissu)
  return (
  <>
  <IssueCard/>
  
  
  
  
  </>
  )
}

export default Body