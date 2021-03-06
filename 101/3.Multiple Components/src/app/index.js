import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header";
import { Home } from "./components/home";

class App extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 c0l-xs-offset=1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 c0l-xs-offset=1">
                        <Home/>
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('app'));