import React from 'react'
import ProjectCard from './projectsChildren/ProjectCard'

export default class Projects extends React.Component {

    render() {
        const uGate = {
            title: "UGate",
            summary: "A cross currency Gateway built upon Ripple's API  (A cross currency Consensus Validation ledger, which in turn lowers  the total cost of settlement by enabling banks to transact directly, instantly and with certainty of settlement).",
            tech: "React, Express, MongoDB, Stripe, Plaid, Chai, Mocha, axios, authy, bcrypt, JWT, nodemailer, Bcrypt",
            created: "Wrote the MVC with complete Architectural mapping of relationships and developed alongside team.",
            gitHub: "private",
            img: "./ugate.jpeg"
        };
        const yumYum = {
            title: "YumYum",
            summary: "A recipe web app using the sequelize ORM with 3 different tables, that dynamically creates cards upon autocomplete search input from user. User can export shopping list, print and add recipes, along with hot/popular recipes page. ",
            tech: "body-parser, chai, express, express-handlebars, method-override, mocha mysql, sequelize",
            created: "Responsible for auto complete data, Models, API routes, Also helped develop front end and dynamic creation of cards.",
            gitHub: "https://github.com/Rhyngoh/ProjectDionysus",
            img: "./yumyum.jpeg"
        };
        const typsyWeather = {
            title: "TypsyWeather",
            summary: " A web application that cross refrences API's to compare weather data and geolocate, to suggest the top cocktail to drink based on provided conditions.",
            tech: "Materialize, CSS, JQUERY, AJAX",
            created: "Incorporated API and object Data models for the CocktailDB, along with front end components.",
            gitHub: "https://github.com/RJRowland93/Drink_Weather",
            img: "./typsyWeather.jpg"
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 padd" >
                        <ProjectCard title={uGate.title} summary={uGate.summary} git={uGate.gitHub} tech={uGate.tech} created={uGate.created} img={uGate.img}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 padd " >
                        <ProjectCard title={yumYum.title} summary={yumYum.summary} git={yumYum.gitHub} tech={yumYum.tech} created={yumYum.created} img={yumYum.img}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 padd " >
                        <ProjectCard title={typsyWeather.title} summary={typsyWeather.summary} git={typsyWeather.gitHub} tech={typsyWeather.tech} created={typsyWeather.created} img={typsyWeather.img}/>
                    </div>
                </div>
            </div>

        );
    }
}
