import React from 'react';
import './Person.css';

const person = function(props) {
    return(
        <div className="Person">
            <p >I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;