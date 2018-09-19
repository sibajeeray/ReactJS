import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hii, Welcome to the React World</h1>
        
        <Person/> {/*No properties passed for this person*/}
        <Person name="Sibajee Ray" age="25" />
        <Person name="Aditya" age="25"></Person>
        <Person name="Abhisek" age="22">I AM GOING IN</Person>{/*Children property passed between <person> tag*/}
      
      </div>
      
    );
  }
}

export default App;
