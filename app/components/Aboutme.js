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
            <div>
                <div className="row padd">
                    <div className="col-xs-4">
                        <img className="img-responsive" id="proPic" src="./proPic.jpg"/>

                    </div>
                    <div className="col-xs-1"></div>
                    <div className="col-xs-3">
                        <p>
                            Well, since you made it this far, I can only assume that you would like to learn more about the dudenamedjune.</p>
                        <p>
                            My real name is June Lara and my life for the past 3 months-850ish hours have been nonstop programmatic. I hope to dedicate many thousands hours more to this awesome community and into creating new technology for better world. I am a junior software engineer, a full stack developer - basically whatever fancy title best describes the skill set Liam Neeson only could wish to wield. My first encounter with the temptress that is computer science was as a student in my high school web development elective, learning HTML and CSS. However, UX design is not solely responsible for luring me into the depths of programming - for that, I thank Alan Turing and his remarkable breakthrough about computable numbers. My favorite actives involve writing code, studying the tech world, tinkering with my Raspberry Pi and patiently waiting for season 3 of Rick and Morty.
                        </p>
                        <p>
                            Contact me via <a href="https://www.linkedin.com/in/dudenamedjune">LinkedIn</a> if you are interested in poaching me from my entrepreneurial projects.</p>
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
