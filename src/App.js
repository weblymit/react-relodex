import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  state = {
    familles: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ familles: users }))
    
  }
  render() {
    return (
      <div className="App">
        <input type="search" placeholder='recherche' />
        <CardList familles={this.state.familles}/>
      </div>
    );

  }
}


export default App