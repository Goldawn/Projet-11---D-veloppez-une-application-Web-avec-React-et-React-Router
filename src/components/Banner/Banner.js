import React from 'react';
import bannerBg from '../../assets/images/banner_bg.jpg'
import './Banner.css'

export default function Banner() {
    return (
        <div id="banner">
            <picture>
                <img src={bannerBg} alt=""></img>
            </picture>
            <div id="banner-veil">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}