import React from 'react';
import './Person.css';

const person = function(props) {
    return(
        <div className="Person">
            <p onClick = {props.clcik}>I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
}

export default person;