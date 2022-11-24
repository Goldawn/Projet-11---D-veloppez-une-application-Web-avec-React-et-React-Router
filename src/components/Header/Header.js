import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../../assets/icons/logo.svg"
import Navbar from "../Navbar/Navbar"
import './Header.css'

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <Navbar />
        </header>
    )
}