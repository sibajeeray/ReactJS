import React, {Component} from 'react';
import Cssclasses from './Person.css';

class Person extends Component {
    render () {
        return(
            <div className={Cssclasses.Person}>
                <p onClick={this.props.click} >I am {this.props.name} and my age is {this.props.age}.</p>
                <p>{this.props.children}</p>
            </div>
        );
    };
}
export default Person;