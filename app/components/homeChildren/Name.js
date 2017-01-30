import React from "react"
import { Link } from 'react-router';

export default class Name extends React.Component{
    render() {
      let sentence = "Hi, my name's June Lara, and I'm a Full Stack ";
        return (

          <div className="row">
            <div >
                <h1 className='cursor'>
                    {sentence}
                    <span className='type'>
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                    </span>
                </h1>
            </div>

          </div>





        );
    }
}
