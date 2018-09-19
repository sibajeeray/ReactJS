import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = function(props) {
    const style = {
        '@media (min-width: 500px)':{
            width : '450px'
        }
    }
    return(
        <div className="Person" style = {style}>
            <p onClick={props.delete} >I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Radium(person);