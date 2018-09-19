import React,{ Component } from "react";
import Person from './Person/Person';

class Persons extends Component {
  render(){
    return this.props.persons.map((person,personIndex)=>{
      return <Person click={()=>this.props.clicked(personIndex)} 
      name={person.name} 
      age={person.age} 
      key={personIndex}/>
    });
  };
}

export default Persons;