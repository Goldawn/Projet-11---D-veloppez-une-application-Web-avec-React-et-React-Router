import React from 'react';
import logo from "../../assets/icons/logo.svg"
import Navbar from "../Navbar/Navbar"
import './Header.css'
// import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <Navbar />
        </header>
    )
}