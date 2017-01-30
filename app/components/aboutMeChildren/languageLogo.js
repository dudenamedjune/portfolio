import React from 'react'

export default class LanguageLogo extends React.Component {
  render(){
    return(
      <div className="row">
        <img className="img-responsive languageLogo" src={this.props.imgPath} />
      </div>

    );
  }
}
