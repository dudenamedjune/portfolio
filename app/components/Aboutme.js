import React from "react"
// import {Link} from 'react-router';
import LanguageLogo from './aboutMeChildren/LanguageLogo'
export default class Name extends React.Component {
    render() {
        const mongoDB = "./MongoDB-Logo.svg.png";
        const react = "./react.png";
        const node = "./nodejs.png";
        const sql = "./MySQL.svg.png ";

        return (
            <div className="container-fluid">
                <div className="row padd" >
                    <div className="col-xs-4">
                        <img  className="img-responsive" id="proPic" src="./proPic.jpg" />

                    </div>
                    <div className="col-xs-1"></div>
                    <div className="col-xs-3">
                      <p> Well since you made it this far I can only assume that you would lik e to know a little more about this dudenamedjune(also my online psudo name).</p>
                      <p> I am a junior software engineer, full stack developer, really what ever fancy title is included with the set of skills Liam neeson, only wishes to wield. I began learning html and css when I was a junior in highschool in my web development elective, but UX design was not the path that really woke me up to the world of programming/computer science. Alan Turing was the man responsible for obtaining my intrest, although I am not near the level of mathmatical ingenious as the man mentioned, I still wrote a paper over his theory "On Computable Numbers" at a history level. </p>
                    </div>
                    <div className="col-xs-1"></div>
                    <div className="col-xs-3">
                        <LanguageLogo imgPath={mongoDB}/>
                        <LanguageLogo imgPath={react}/>
                        <LanguageLogo imgPath={node}/>
                        <LanguageLogo imgPath={sql}/>

                    </div>
                </div>

            </div>
        );
    }
}
