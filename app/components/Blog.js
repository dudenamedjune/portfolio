import React, { Component } from "react";

export default class Blog extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.serverlessModal = this.serverlessModal.bind(this);
  }
  componentDidMount(){
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }
  serverlessModal(){
    return(
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <embed style={{height: "100vh", width: "100%"}} src="./serverless.pdf"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render(){
    return(

      <div className="container  padd" >
        <div className="list-group">
          <a href="#" data-toggle="modal" data-target="#exampleModal" className="list-group-item">
            <h4 className="list-group-item-heading">Horribly Awesome Nomenclature: Serverless (October 26th, 2017)</h4>
            <p className="list-group-item-text" style={{color: "black"}}>What is serverless?  What's an API Gateway? What's Lambda? </p>

          </a>
        </div>
          {this.serverlessModal()}
    </div>
      )
  }
}
