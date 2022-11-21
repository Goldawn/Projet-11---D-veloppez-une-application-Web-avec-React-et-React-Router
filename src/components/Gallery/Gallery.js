import React from 'react';
import Thumb from '../Thumb/Thumb'
import './Gallery.css'
import logements from '../../data/logements.json'

export default function Gallery() {

    console.log(logements.length)

    return (
        <div id="gallery">
        
        {
            logements.map((logement,id) => {
                return (
                  <Thumb key={id} data={logement} />
                )
            })
        }
        </div>
    )
}