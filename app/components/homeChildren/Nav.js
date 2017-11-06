import React from "react"
import { Link } from 'react-router';

export default class Nav extends React.Component{
    render(){
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item" role="presentation">
                    <Link to="/" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/Projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/AboutMe" className="nav-link">About Me </Link>
                </li>
                <li  className="nav-item" role="presentation">
                    <Link to="/Blog" className="nav-link">Blog </Link>
                </li>
            </ul>

        );
    }

}
