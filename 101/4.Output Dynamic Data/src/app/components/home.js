import React from "react";

export class Home extends React.Component{
     Name="Sibajee Ray";
    render(){
        let name="Sibajee";
        return(
            <div class="container">
                <h2>This is the Home page of this Project</h2>
                <h3>{this.Name} is a Class Level Variable</h3>
                <h4>{name} is a function Level Variable</h4>

                {5+2}

                <br/><br/>

                {5==2 ? "Yes" : "No"}
                
            </div>
        );
    }
}