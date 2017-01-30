import React from 'react'


export default class ProjectCard extends React.Component {
handleDrag(){
  console.log("hi");
}

    render() {

        return (
            <div className="media panelBorder ">
                <div className="media-left">
                    <a href={this.props.git} >
                      <img onMouseEnter={this.handleDrag} className="media-object btn projImg img-responsive"  src={this.props.img} alt="image of project"/>

                    </a>
                </div>
                <div className="media-body leftPadd">
                    <h2 className="media-heading">{this.props.title}</h2>
                    <ul>
                      <li>
                      <h3 className="left">{this.props.summary}</h3><br /><br />

                      </li>
                      <li >
                      <h3 className="left">{this.props.tech}</h3><br /><br />

                      </li>
                      <li ><h3 className="left">{this.props.created}</h3><br /><br />

                      </li>
                    </ul>

                </div>
            </div>
        );
    }
}
