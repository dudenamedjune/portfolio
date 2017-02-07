import React from 'react'

export default class ProjectCard extends React.Component {
    handleDrag() {
        console.log("hi");
    }

    render() {

        return (
            <div className="grid">
                <figure className="effect-sarah">

                    <img onMouseEnter={this.handleDrag} src={this.props.img} alt="image of project"/>

                    <figcaption>
                        <h2 >
                            <span>{this.props.title}</span>
                        </h2>
                        <ul>
                            <li>
                                <p className="left">{this.props.summary}</p>
                            </li>
                            <li>
                                <p className="left">{this.props.tech}</p><br/><br/>
                            </li>
                            <li>
                                <p className="left">{this.props.created}</p><br/><br/>
                            </li>

                        </ul>
                        <a href={this.props.git}></a>
                    </figcaption>
                </figure>
            </div>

        );
    }
}
