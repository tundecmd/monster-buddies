import React, { Component } from 'react';
import './App.css';
import CardList from './cardList';
import SearchBox from './searchbox';
import Scroll from './scroll';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json();})
      .then(users => {this.setState({ monsters: users})})
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
        <Scroll>
          <CardList monsters={filteredMonsters}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
