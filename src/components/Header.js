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
                    <Link to={"home"}>home </Link>
                    <Link to={"service"}>service </Link>
                    <Link to={"experience"}>experience </Link>
                    <Link to={"portfolio"}>portfolio </Link>
                    <Link to={"contact"}>contact </Link>
                </nav>

            </header>

        )
    }
}

export default Header;
