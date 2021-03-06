import React, { Component } from 'react';
import Ideas from './Ideas.js';
import IdeaForm from './IdeaForm.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    };
    this.addIdea = this.addIdea.bind(this);
  }

  addIdea(newIdea) {
    newIdea = {
      id: Date.now(), 
      key: Date.now(), 
      title: newIdea.title, 
      description: newIdea.description}
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  deleteIdea(idOfCardToDelete) {
    console.log(idOfCardToDelete)
    this.setState({
      ideas: this.state.ideas.filter(idea => idea.id !== idOfCardToDelete)
    })
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <IdeaForm addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea.bind(this)} />
      </main>
    );
  }
}

export default App;
