import React from "react";

export class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <h2>This is the Home page of this Project</h2>
                
                <p>My name is {this.props.myname} and my age is {this.props.myage}.</p>

                <p>User's name is {this.props.user.name} and his age is {this.props.user.age}.</p>

                <div>
                    <h4>Hobbies of the user are : </h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                    </ul>
                </div>

            </div>
        );
    }
}