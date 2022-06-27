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
            <p className="text">I am a 22 y.o. mobile developer that love using flutter. But currently i use java native as my primary programming language, and i also learn react native and react js in Hacktiv8.</p>
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