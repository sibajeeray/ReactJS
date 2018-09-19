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
    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person clcik={this.switchNameHandler.bind(this, 'Max')} name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        
        <Person changed={this.changeHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>I AM GOING IN</Person>
       
        <br/><button onClick={this.switchNameHandler.bind(this, 'Maximillion')}>Switch Name</button>
      
        <br/><p id="notice">Text Box is showing below every perosn bcoz we are reusing Person component. But Onchange event is bound to only last person(Check changeHandler() of App.js). So Two way binding will work for last Person only.</p>
      
      </div>
      
    );
  }
}

export default App;
