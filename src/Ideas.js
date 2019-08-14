import React from 'react';
import Idea from './Idea.js'

const Ideas = (props) => {
  return (
    <div className="ideas">
      {props.ideas.map(idea => 
        (<Idea 
          key={(Date.now()* idea.id)} 
          id={idea.id} 
          title={idea.title} 
          description={idea.description}
          deleteIdea={props.deleteIdea}
        />))}
    </div>
  )
}



export default Ideas;