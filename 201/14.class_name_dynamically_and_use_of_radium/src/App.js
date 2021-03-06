import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium from 'radium';

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
    //const persons = this.state.persons;   This is not recommended as it will not copy the persons rather just point to the object. So It'll change the data of our original person.
    //So to make a copy of the object either we can call slice() without argument on persons
    // Or we can call spread operatoor of ES6, Like this
    // const persons = [...this.state.persons];
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' :{
        backgroundColor :'lightgreen',
        color : 'black'
      }
    }

    // const classes=['red','bold'].join(' ');
    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    let persons =null;

    if(this.state.showPersons){
      persons = (
        <div>
          { 
            this.state.persons.map((person,personIndex)=>{
              return <Person delete={this.deletePersonHandler.bind(this,personIndex)} name={person.name} age={person.age} key={personIndex}/>
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>
        <h3 className={classes.join(' ')}>Persons Details</h3>

        <button onClick={this.toggleHandler} style={style}>Toggle Person</button>

        {persons}

      </div>
    );
  }
}

export default Radium(App);
