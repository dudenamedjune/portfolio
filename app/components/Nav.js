var React = require('react');

var Nav = React.createClass({
    handleClick: function() {},
    render: function() {
        return (
            <ul className="nav nav-tabs">
                <li role="presentation" className="active">
                    <a href="#/">Home</a>
                </li>
                <li role="presentation">
                    <a href="#/projects">Projects</a>
                </li>
                <li role="presentation">
                    <a href="#/aboutMe">About Me</a>
                </li>
            </ul>

        );
    }

});

module.exports = Nav;
