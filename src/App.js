import React, { Component } from 'react';
import './App.css';
import CardList from './cardList';
import { monsters } from './monsters';
import SearchBox from './searchbox';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: monsters,
      searchfield: ''
    }
  }
  onSearchChange = event => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1 className='f1'>Monster Buddies!!!</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
