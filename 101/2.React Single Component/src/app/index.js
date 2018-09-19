import React from "react";
import { render } from "react-dom";

class App extends React.Component {

    render(){
        return(

            //This looks like HTML.But internally it is the JS code and then processed to html by react
            //We can't use 'class' attribute as it is not html. We have to use 'className' which can be understood by React
            //Only one root <div> can be there inside one react Component Class. Child or sub-div is possible.
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <h1>Hello</h1>
                    </div>
                    <div className="col-md-offset-2 col-md-3 ">
                        <h1>There</h1>
                    </div>
                </div>
            </div>

        );
        
    }
}

render(<App/>,window.document.getElementById('app'));