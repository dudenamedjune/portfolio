import React from 'react'
import ProjectCard from './ProjectCard'

export default class Projects extends React.Component{

  render(){
    const uGate = {
      title: "UGate",
      summary: "A cross currency Gateway built upon Ripple's API  (A cross currency Consensus Validation ledger, which in turn lowers  the total cost of settlement by enabling banks to transact directly, instantly and with certainty of settlement) Wrote the MVC with complete Architectural mapping of relationshipsand developed alongside team.",
      gitHub: "private",
      img: "./ugate.jpeg"
    };
    const yumYum = {
      title: "YumYum",
      summary: "A recipe web app using the sequelize ORM and 3 different tables, that dynamically         creates cards upon autocomplete search input from user. User can export shopping list, print and add recipes, along with hot/popular recipes page. Created: auto complete from DB response, Models, API routes, Also helped develop front end and dynamic creation of cards.",
      gitHub: "https://github.com/Rhyngoh/ProjectDionysus",
      img: "../../public/yumyum.jpeg"
    };
    const typsyWeather ={
      title: "TypsyWeather",
      summary: " A web application that cross refrences API's to compare weather data and geolocate, to suggest the top cocktail to drink based on provided conditions.",
      gitHub: "https://github.com/RJRowland93/Drink_Weather",
      img: "../../public/typsyWeather.jpeg"
    };
    return(
      <div className="container-fluid">
          <div className="row">
          <div className="col-md-4">
            <ProjectCard title={uGate.title} summary={uGate.summary} buttonLink={uGate.github} img={uGate.img} />
          </div>
          <div className="col-md-4">
            <ProjectCard title={yumYum.title} summary={yumYum.summary} buttonLink={yumYum.github} img={yumYum.img} />
          </div>
          <div className="col-md-4">
            <ProjectCard title={typsyWeather.title} summary={typsyWeather.summary} buttonLink={typsyWeather.github} img={typsyWeather.img} />
          </div>
        </div>
      </div>

    );
  }
}
