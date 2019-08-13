import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value }) 
  }

  render() {
    return(
      <form>
        <input 
          type="text" 
          placeholder="Title" 
          name="title"
          value={this.state.title} 
          onChange={e => this.handleChange(e)}
        />
        <input 
          name="description" 
          value={this.state.description} 
          onChange={e => this.handleChange(e)} 
          type="text" 
          placeholder="Description" 
        />
        <button>Add Idea</button>
      </form>
    ) 
  }
}

export default IdeaForm;