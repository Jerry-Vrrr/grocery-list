import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            amount: '',
        }
    }

updateState = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
}
createObj = (event) => {
    event.preventDefault()
    const idea = {
        id: Date.now(),
        ...this.state
    }
     this.props.addIdea({idea})
     return fetch('http://localhost:3001/items', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(idea)
     } )
        .then(response => response.json())
        .then(data => console.log('post', data))
     
}

  render() {
    return (
      <form className='form'>
          <input className='item' type='text' placeholder='Item' name='name' value={this.state.name} onChange={(event) => this.updateState(event)}></input>
          <input className='amount' type='text' placeholder='Amount' name='amount' value={this.state.amount} onChange={(event) => this.updateState(event)}></input>
          <button className='submit' type='submit' onClick={(event) => this.createObj(event)} >Submit</button>
      </form>
    )
  }
}
