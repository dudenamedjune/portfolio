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
              <iframe style={{height: "100vh", width: "100%"}} src="https://drive.google.com/open?id=1bHBJvin4KQa2str_WMNcsOptrYRChWZiIk2XCQeGaHw"/>
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
      <div className="card-deck">
        <div className="card text-white bg-dark mb-3" style={{width: "20rem"}}>
          <div className="card-body">
            <h4 className="card-title">Horribly Awesome Nomenclature: Serverless</h4>
            <p className="card-text">What is serverless?  What's an API Gateway? What's Lambda? </p>
            <button href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Go somewhere</button>
            {this.serverlessModal()}
          </div>
        </div>
      </div>
    </div>
      )
  }
}