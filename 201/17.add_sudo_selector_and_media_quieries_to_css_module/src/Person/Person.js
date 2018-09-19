import React from 'react';
import Cssclasses from './Person.css';

const person = function(props) {
    
    return(
        <div className={Cssclasses.Person}>
            <p onClick={props.delete} >I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;