import React from 'react'
// import helpers from '../utils/helpers'
export default class ContactMe extends React.Component {



    render() {
        return (
            <div className="row">

                    <div className="input-group">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea id="messagetToMe" className="form-control" rows="3"></textarea>
                              </div>


                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>

                    </div>

            </div>
        );
    }
}
