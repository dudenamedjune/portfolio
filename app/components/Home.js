import Name from "./Name"
import Nav from "./Nav"
//include react
import React from "react"
import { Link } from 'react-router';

//create home page component
//will contain background

export default class Home extends React.Component{
  render(){
        return (
          <div>
            <Nav />
            <div className="masthead segment">

                <div className="ui page grid">
                    <div className="column">
                        <div className="introduction">
                            {this.props.children}
                            <div className="ui hidden divider"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }

}
