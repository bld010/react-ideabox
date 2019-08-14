import React from 'react';

const Idea = ({ title, description, deleteIdea, id }) => {

  return (
    <div className="idea">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>x</button>
    </div>
  )
}

export default Idea;