import React from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from '../logo.svg'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="image">
            <img src={logo} alt=""/>
        </div>
                <nav className="navbar">
                    <Link to={"about"}>about </Link>
                    <Link to={"experience"}>experience </Link>
                    <Link to={"education"}>education </Link>
                    <Link to={"skills"}>skills</Link>
                    <Link to={"interests"}>interests</Link>
                    
                    <Link to={"awards"}>awards</Link>
                    
                </nav>

            </header>

        )
    }
}

export default Header;
