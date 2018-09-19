import React, {Component} from 'react';
import Cssclasses from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor(). Execution Order-1st');
      }
      
      componentWillMount(){
        console.log('[Person.js] inside componentWillMount(). Execution Order-2nd');
      }
      
      componentDidMount(){
        console.log('[Person.js] inside componentDidMount(), Execution Order- 4th');
      }
    
    render () {
        console.log('[Person.js] inside Render(), Execution Order- 3rd');

        return(
            <div className={Cssclasses.Person}>
                <p onClick={this.props.click} >I am {this.props.name} and my age is {this.props.age}.</p>
                <p>{this.props.children}</p>
            </div>
        );
    };
}
export default Person;