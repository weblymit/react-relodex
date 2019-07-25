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
  render() {
    const { familles, searchField } = this.state;
    const filterFamilles = familles.filter(famille =>
      famille.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <SearchBox 
          placeholder='recherche enfant'
          handleChange={e => this.setState({ searchField: e.target.value })}
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