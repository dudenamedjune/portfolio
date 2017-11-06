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
                <div  className="row padd">
                    <div className="cos-xs-12 col-lg-4">
                        <img className="img-responsive" id="proPic" src="./proPic.jpg"/>

                    </div>
                    <div className="col-lg-1"></div>
                    <div style={{backgroundColor: "rgba(203, 204, 201, 0.3)", borderRadius: "4em"}} className="cos-xs-12 col-lg-8">
                      <h2>About my background:</h2>

                      <p className="lead" >Honestly, just thinking about the first layer of the seven-layer OSI model instantly makes me happy. It’s a simply beautiful transition from primitive living to sending pulses of electricity and now, light with fiber to bring so many life changing products to life.
                      I started tinkering with CSS and HTML in junior high when Myspace was popular, and proceeded to take a web development elective in my upperclassman high school years. I traditionally started pursuing computer science, I then shortly decided to join the new wave of Academics, and graduated from The University of Texas’ Full Stack Engineering/Web Development program. Let me traverse a bit - with most of my free time during an unexplained gap, I took an interest in advancing global financial payment systems. For our final project, a classmate and I founded an application called Ugate, a currency exchange connecting the world to Ripple’s payment ledger.
                        As a Full Stack Web developer, I work alongside the team and various clients to bring product ideas to life. My storngest stack is the MERN stack, MongoDB, Express, React and Nodejs, however, my package.json can elaborate on many more technologies used within each unique application. I love being givin the opportunity to push the envelope of bleeding edge web as I am persistently studying and attending my active meetups, always surrounded by an awesome community. I wake up in the morning to make unprecedentedly fast, modern, responsive applications and, for the most part, get out from underneath legacy systems. </p>


                      <h2>You are given the day off to do anything but work.  How do you spend your day?</h2>
                        <p className="lead">Enjoy the outdoors, hang up the hammock and listen to some podcasts. Although I genuinely enjoy Udemy - does that count as work?</p>

                      <h2>Who is your idol/hero?</h2>
                      <p className="lead">Alan Turing, for sure, he is solely responsible for the creation of the computer with the release of his “white paper” on Computable Numbers, with an application to the Entscheidungsproblem. With his help an estimated 14 million - 21 million lives were saved. Despite all of those unrepayable accomplishments, Turing was chemically castrated for being a homosexual and died at the young age of 42 by taking a bite of an apple laced with cyanide.</p>


                      <h2>What would people be surprised to know about you?</h2>
                        <p className="lead"> grew up in a small town , Claude, TX, with a population of 1,100 people. Also I dislike like really soft things, my senses just don’t like the texture.</p>

                        <h2>You can become a master of a skill instantly tomorrow morning. What skill would that be and why?</h2>
                            <p className="lead">Copious amounts of a Data Science - there are so many possibilities within the field of computer science. While attending my ReactJS meetup at Bazaarvoice, one of the speakers was a data scientist on a Full Stack team at Microsoft. They created a machine learning platform to analyze millions of messages off of social media to grab locations of refuges in Benghazi to help the UN locate terrorists without harming civilians. I would love to instantly have that skills to create humanitarian tools like that but I’ll be happy to acquire them through the years as well.</p>

                        <h2>If you had to be trapped in a tv show for a month, which would you choose?</h2>

                        <p className="lead">This is a hard one. I’m going to have to go with RIck & Morty thou... Blitz & Chips, schezwan sauce. How would I survive without my plumbus?</p>
                    </div>

                </div>

            </div>
        );
    }
}
