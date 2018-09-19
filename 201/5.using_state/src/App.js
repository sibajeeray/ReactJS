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

  switchNameHandler =()=>{
    //console.log("Button Clicked");
    //state Can't be changed like this->   this.state.person[1].name="Aditya Rawal";
    this.setState({
      persons : [
        {name : "Sibajee Ray", age : 25},
        {name : "Aditya Rawal", age : 27},
        {name : "Abhisek Sharma", age :24}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I AM GOING IN</Person>
        
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* We should not use paranthesis in switchNameHandler method,
        if we write this.switchNameHandler(), this method willbe called when file load, before click.
        we can also write onClick={()=>{this.switchNameHandler()}}  */}
      
      </div>
      
    );
  }
}

export default App;
