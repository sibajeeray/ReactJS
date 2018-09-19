import React from 'react';
import CssClasses from './Cockpit.css';

const cockpit = (props) => {
    
    const assignedClasses = [];
    let btnClass ='';
    if(props.showPersons){
        btnClass=CssClasses.Red;
    }
    if(props.persons.length<=2){
        assignedClasses.push(CssClasses.red);
    }
    if(props.persons.length<=1){
        assignedClasses.push(CssClasses.bold);
    }
    
    return (

        <div className={CssClasses.Cockpit}>
            <h1>Hii, Welcome to the {props.title}</h1>
            <h3 className={assignedClasses.join(' ')}>Persons Details</h3>

            <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </div>
    );
};

export default cockpit;