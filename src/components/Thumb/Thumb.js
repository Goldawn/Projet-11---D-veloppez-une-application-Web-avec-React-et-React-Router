import React from 'react';
import {Link} from 'react-router-dom'
import './Thumb.css'

export default function Thumb(props) {
    
    const thumbnail = props.data.pictures[Math.floor(Math.random()*props.data.pictures.length)]

    return (
        <Link id="thumb" to={props.data.id} state={props}>
            <img src={thumbnail} alt="miniature du logement"></img>
            <div id="gradient-veil">
                <h3>{props.data.title}</h3>
            </div>
        </Link>
    )
}