import React from 'react';
import './Tag.css'

export default function Tag(props) {
    
    // console.log(props)

    return (
        <div id="tag">
            {props.data}
        </div>
    )
}