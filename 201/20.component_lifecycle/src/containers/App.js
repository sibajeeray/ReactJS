import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import CssClasses from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    //Inside constructor we can write only props, everywhere else it should be this.props
    console.log('[App.js] inside constructor(). Execution Order-1st');

    // It's better to declare states inside constructor.
    this.state = {
      persons : [
        {name : "Sibajee Ray", age : 25},
        {name : "Aditya", age : 25},
        {name : "Abhisek", age :24}
      ],
      showPersons : false
    }
  }
  
  componentWillMount(){
    console.log('[App.js] inside componentWillMount(). Execution Order-2nd');
  }
  
  componentDidMount(){
    console.log('[App.js] inside componentDidMount(), Execution Order- 4th');
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
    console.log('[App.js] inside Render(), Execution Order- 3rd');
    
    let persons =null;

    if(this.state.showPersons){
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler}/>
      );
    }
    return (
      <div className={CssClasses.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.toggleHandler}
          title={this.props.title} 
        />
        {persons}

      </div>
    );
  }
}

export default App;
