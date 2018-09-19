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
    toggleValue : false
  }

  toggleHandler = ()=>{
    var bool=this.state.toggleValue;  
    this.setState(
      {toggleValue : !bool}
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

    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>

        <button onClick={this.toggleHandler} style={style}>Toggle Person</button>
        { this.state.toggleValue ? 
          
          <div>
          <br/>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I AM GOING IN</Person>
          </div>
          : null
          // conditional statement is used, Condition ? tru : flase
        }
      </div>
      
    );
  }
}

export default App;
