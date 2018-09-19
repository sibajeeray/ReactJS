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

    let persons =null;

    if(this.state.showPersons){
      persons = (
        <div>
          { 
            this.state.persons.map((person, index)=>{
              return <Person name={person.name} age={person.age} key={index}/>
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>

        <button onClick={this.toggleHandler} style={style}>Toggle Person</button>

        {persons}

      </div>
    );
  }
}

export default App;
