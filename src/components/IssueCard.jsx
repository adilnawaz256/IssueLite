import React from 'react'

const IssueCard = () => {
  return (
    <div>
    <span><i className="fa fa-circle-exclamation mt-3 m-1 text-sm"></i></span>
    <p>Bug: useId generates a new different ID on second render of Strict Mode before un-mount <span></span></p>
    </div>
  )
}

export default IssueCard