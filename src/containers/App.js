import React, { Component } from 'react';
import './App.css';
import CardList from '../components/cardList';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';




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
    const { searchfield, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return(!monsters.length) ? (<h1>loading...</h1>)
      : ( <div className='tc'>
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
