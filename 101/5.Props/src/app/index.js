import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header";
import { Home } from "./components/home";

class App extends React.Component {

    render(){

        var user = {
            name:"Mathew Hover",
            age: 32,
            hobbies:["Singing", "Dancing", "Travelling"]
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 c0l-xs-offset=1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 c0l-xs-offset=1">
                        <Home myname={"Sibajee"} myage={25} user={user} />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('app'));