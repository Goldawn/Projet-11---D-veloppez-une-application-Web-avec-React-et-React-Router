import React from 'react';
import {Link} from 'react-router-dom'
import './Thumb.css'

export default function Thumb(props) {

    console.log(props.data.pictures[0])
    const thumbnail = props.data.pictures[0]

    return (
        <Link id="thumb" to={props.data.id} state={props}>
            <img src={thumbnail} alt="miniature du logement"></img>
            <div id="gradient-veil">
                <h3>{props.data.title}</h3>
            </div>
        </Link>
    )
}