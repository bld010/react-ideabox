import React from 'react';
import Idea from './Idea.js'

const Ideas = (props) => {
  return (
    <div className="ideas">
      {props.ideas.map(idea => <Idea idea={idea} />)}
    </div>
  )
}



export default Ideas;