import React from 'react';

const person = function(props) {
    return(
        <div>
            <p onClick = {props.clcik}>I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
}

export default person;