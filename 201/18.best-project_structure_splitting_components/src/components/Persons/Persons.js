import React from "react";
import Person from './Person/Person';

const persons = (props) => props.persons.map((person,personIndex)=>{
    return <Person click={()=>props.clicked(personIndex)} 
    name={person.name} 
    age={person.age} 
    key={personIndex}/>
  });

//This is the ES6 feature where if function body contains one line and that is wrapped with ( ) bracket
//then this will act as RETURN statement.


export default persons;