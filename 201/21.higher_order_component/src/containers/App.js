import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import CssClasses from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

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

  deletePersonHandler = (personIndex)=>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    let persons =null;

    if(this.state.showPersons){
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler}/>
      );
    }
    return (
      <WithClass CssClasses = {CssClasses.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.toggleHandler}
          title={this.props.title} 
        />
        {persons}

      </WithClass>
    );
  }
}

export default App;
