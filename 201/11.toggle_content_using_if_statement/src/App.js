import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name : "Sibajee Ray", age : 25},
      {name : "Aditya", age : 25},
      {name : "Abhisek", age :24}
    ],
    showPersons : false
  }

  toggleHandler = ()=>{
    var bool=this.state.showPersons;  
    this.setState(
      {showPersons : !bool}
    );
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

    let person =null;

    if(this.state.showPersons){
      person = (
        <div>
          <br/>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I AM GOING IN</Person>
        </div>
      );
      
      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>

        <button onClick={this.toggleHandler} style={style}>Toggle Person</button>

        {person}

      </div>
    );
  }
}

export default App;
