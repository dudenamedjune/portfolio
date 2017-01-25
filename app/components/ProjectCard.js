import React from 'react'

export default class ProjectCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={this.props.img}/>
                        <div className="caption">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.summary}</p>
                            <p>
                                <a href={this.props.buttonLink} className="btn btn-primary" role="button">Github</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
