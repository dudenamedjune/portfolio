import React from "react"
import { Link } from 'react-router';

export default class Nav extends React.Component{
    render(){
        return (
            <ul className="nav nav-tabs">
                <li role="presentation" className="active">
                    <Link to="/">Home</Link>
                </li>
                <li role="presentation">
                    <Link to="/Projects">Projects</Link>
                </li>
                <li role="presentation">
                    <Link to="/AboutMe">About Me </Link>
                </li>
            </ul>

        );
    }

}
