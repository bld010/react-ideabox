import React from 'react';

const Idea = (props) => {
  return (
    <div className="idea">
      <h3>{props.idea.title}</h3>
      <p>{props.idea.description}</p>
    </div>
  )
}

export default Idea;