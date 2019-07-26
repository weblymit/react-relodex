import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  state = {
    familles: [],
    searchField:''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ familles: users }))
    
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { familles, searchField } = this.state;
    const filterFamilles = familles.filter(famille =>
      famille.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Family Relodex</h1>
        <SearchBox 
          placeholder='recherche enfant'
          handleChange={this.handleChange}
        />
        
        {/* Si on utilise pas le search on fait juste le code dessus */}
        {/* <CardList familles={this.state.familles}/> */}
        {/* Code with le filter search */}
        <CardList familles={filterFamilles}/>

      </div>
    );

  }
}


export default App