import Name from "./homeChildren/Name"
import Nav from "./homeChildren/Nav"
//include react
import React from "react"
import {Link} from 'react-router';

//create home page component
//will contain background

export default class Home extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <Nav/>
                <div className="container">

                    {this.props.children}

                </div>
            </div>

        );
    }
}
