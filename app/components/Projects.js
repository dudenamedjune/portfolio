import React from 'react'
import ProjectCard from './ProjectCard'

export default class Projects extends React.Component{
  const uGate = {
    title: "UGate"
    summary: "A cross currency Gateway built upon Ripple's API
    (A cross currency Consensus Validation ledger, which in turn lowers
      the total cost of settlement by enabling banks to transact directly,
      instantly and with certainty of settlement)
      Wrote the MVC with complete Architectural mapping of relationships
       and developed alongside team.",
    gitHub: "private",
    img: "n/a"
  },
  const yumYum = {
    title: "YumYum"
    summary: "A recipe web app using the sequelize ORM and 3 different tables,
              that dynamically creates cards upon autocomplete search input from user.
              User can export shopping list, print and add
              recipes, along with hot/popular recipes page.
              Created: auto complete from DB response, Models, API routes,
              Also helped develop front end and dynamic creation of cards.",
    gitHub: "https://github.com/Rhyngoh/ProjectDionysus",
    img: "../../public/yumyum.jpeg"
  },

  const typsyWeather ={
    title: "TypsyWeather"
    summary:
    gitHub:
    img:
  },
  render(){
    return(
      <div className="container-fluid">
          <div className="row"
          <div className="col-md-4">
            <ProjectCard title={this.uGate.title} summary={this.uGate.summary} buttonLink={this.uGate.github} img={this.uGate.img} />
          </div>
          <div className="col-md-4">
            <ProjectCard title={this.yumYum.title} summary={this.yumYum.summary} buttonLink={this.yumYum.github} img={this.yumYum.img} />
          </div>
          <div className="col-md-4">
            <ProjectCard title={this.typsyWeather.title} summary={this.typsyWeather.summary} buttonLink={this.typsyWeather.github} img={this.typsyWeather.img} />
          </div>
        </div>
      </div>

    );
  }
}
