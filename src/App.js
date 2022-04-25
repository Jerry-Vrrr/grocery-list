import React, { Component } from 'react'
import ListBox from './ListBox'
import { goFetch } from './apiCalls'
import Form from './Form'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      groceryList: [],

    }

  }

componentDidMount() {
  goFetch()
  .then(data => this.setState({groceryList: data}))
}

addIdea = ({idea}) => {
  console.log('app',idea)
  this.setState({groceryList: [...this.state.groceryList, idea]})

}

  render() {
    return (
      <div>
            <Form addIdea={this.addIdea}/>
              <ListBox list={this.state.groceryList} />
      </div>
    )
  }
}



