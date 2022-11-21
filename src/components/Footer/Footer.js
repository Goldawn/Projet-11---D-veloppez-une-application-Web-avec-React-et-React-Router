import React from 'react';
import logoWhite from "../../assets/icons/logo-white.svg"
import './Footer.css'


export default function Footer() {
    return (
        <footer>
            <img src={logoWhite} className="logo" alt="logo" />
            © 2020 Kasa. All rights reserved
        </footer>
    )
}