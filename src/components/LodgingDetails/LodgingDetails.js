import React from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import star from "../../assets/icons/star.svg"
import Carousel from "../Carousel/Carousel"
import Dropdown from '../Dropdown/Dropdown'
import Tag from '../Tag/Tag'
import './LodgingDetails.css'

export default function LodgingDetails(props) {
    
    const location = useLocation();
    const lodgingData = location.state.data
    const ratingValue = Number(lodgingData.rating)
    const restValue = 5 - ratingValue;
    console.log(lodgingData)

    return (
        <main id="lodging-details">
            <Carousel data={lodgingData.pictures}/>
            <div id="heading-and-profile">
                <div id="heading">
                    <h1>{lodgingData.title}</h1>
                    <h2>{lodgingData.location}</h2>
                </div>
                <div id="profile">
                    <p>Alexandre <br />Dumas</p>
                    <div id="profile-picture">
                        <img src={lodgingData.host.picture} alt="profile picture"></img>
                    </div>
                </div>
            </div>
            <div id="tags-and-rating">
                <div id="tag-container">
                    {
                        lodgingData.tags.map((tag ,id) => {
                            return (
                                <Tag key={id} data={tag} />
                            )
                        })
                    }
                </div>
                <div id="rating">
                    {
                        [...Array(ratingValue)].map((e, i) => 
                            <img src={star} className="star" key={i} alt="logo" />
                        )    
                    }
                    {
                        [...Array(restValue)].map((e, i) => 
                            <img src={star} className="star empty" key={i} alt="logo" />
                        )
                    }
                </div>
            </div>
            <div id="lodging-details-dropdown">
                <Dropdown name="Description" content={lodgingData.description}/>
                <Dropdown name="Equipements" content={lodgingData.equipments}/>
            </div>
        </main>
    )
}