import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name : "Sibajee Ray", age : 25},
      {name : "Aditya", age : 25},
      {name : "Abhisek", age :24}
    ]
  }

  switchNameHandler = (newName)=>{
    this.setState({
      persons : [
        {name : newName, age : 25},
        {name : "Aditya Rawal", age : 27},
        {name : "Abhisek Sharma", age :24}
      ]
    });
  }

  changeHandler = (event)=>{
    this.setState({
      persons : [
        {name : "Sibajee Ray", age : 25},
        {name : "Aditya Rawal", age : 27},
        {name : event.target.value, age :24}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person clcik={this.switchNameHandler.bind(this, 'Max')} name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        
        <Person changed={this.changeHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>I AM GOING IN</Person>
       
        <br/><button style={style} onClick={this.switchNameHandler.bind(this, 'Maximillion')}>Switch Name</button>
      
      </div>
      
    );
  }
}

export default App;
