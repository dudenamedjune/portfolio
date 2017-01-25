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
                    <Link to="/projects">Projects</Link>
                </li>
                <li role="presentation">
                    <Link to="/aboutMe">About Me </Link>
                </li>
            </ul>

        );
    }

}
