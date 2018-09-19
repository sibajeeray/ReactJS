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
        <Person clcik={this.switchNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>I AM GOING IN</Person>
        {/*switchNameHandler is passed as a property named click*/}

        <button onClick={this.switchNameHandler}>Switch Name</button>
      
      </div>
      
    );
  }
}

export default App;
