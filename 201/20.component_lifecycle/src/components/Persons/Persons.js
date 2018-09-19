import React,{ Component } from "react";
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js] inside constructor(). Execution Order-1st');
  }
  
  componentWillMount(){
    console.log('[Persons.js] inside componentWillMount(). Execution Order-2nd');
  }
  
  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount(), Execution Order- 4th');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Update [Persons.js] inside shouldCompinentUpdate');
  //   console.log(this.props.persons);
  //   if(nextProps.persons.length>0)
  //     return true;
  //   else
  //     return false; 
  // }

  render(){
    console.log('[Persons.js] inside Render(), Execution Order- 3rd');

    return this.props.persons.map((person,personIndex)=>{
      return <Person click={()=>this.props.clicked(personIndex)} 
      name={person.name} 
      age={person.age} 
      key={personIndex}/>
    });
  };
}

export default Persons;