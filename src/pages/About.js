import React, { Component } from 'react'
import logo from '../logo.svg';


export class About extends Component {
  render() {
    return (
        <section className="about" id="about">

        <div className="content">
            <span className="hi"> Hallo... </span>
            <h3> i am <span> afdrian juarlin </span> </h3>
            <p className="info"> i am a mobile developer </p>
            <p className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quidem excepturi natus iste ut. Alias, quod? Earum pariatur obcaecati dolorum! </p>
            <div class="follow">
    </div>
        </div>
    
        <div className="image">
            <img src={logo} alt=""/>
        </div>
    
    </section>
    )
  }
}

export default About