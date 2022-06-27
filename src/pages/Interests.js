import React, { Component } from 'react'
import logo from '../logo.svg';


export class Interests extends Component {
  render() {
    return (
        <section className="about" id="about">

        <div className="content">
            <p className="info"> Interests </p>
            <p className="text">Saya sangat tertarik dengan mobile development, dan modern stack technology such as react js, react native, flutter, vue js.</p>
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

export default Interests