import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import star from "../../assets/icons/star.svg"
import Carousel from "../../components/Carousel/Carousel"
import Dropdown from '../../components/Dropdown/Dropdown'
import Tag from '../../components/Tag/Tag'
import logements from '../../data/logements.json'
import './LodgingDetails.css'

export default function LodgingDetails() {

    const navigate = useNavigate();
    const location = useLocation();    
    const singleLogement = logements.find(logement => logement.id === location.pathname.slice(1))
  
    useEffect(()=> {    
        if(!singleLogement) {
            navigate("*")
        }
    })

    if(singleLogement) {
        const lodgingData = singleLogement
        const ratingValue = Number(lodgingData.rating)
        const restValue = 5 - ratingValue;
    
        return (
            <main id="lodging-details">
                <Carousel data={lodgingData.pictures}/>

                <section id="lodging-infos">
                    <div id="heading-and-tags">
                        <div id="heading">
                            <h1>{lodgingData.title}</h1>
                            <h2>{lodgingData.location}</h2>
                        </div>
                        <div id="tag-container">
                            {
                                lodgingData.tags.map((tag ,id) => {
                                    return (
                                        <Tag key={id} data={tag} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div id="rating-and-profile">
                        
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
                        <div id="profile">
                            <p>{lodgingData.host.name}</p>
                            <div id="profile-picture">
                                <img src={lodgingData.host.picture} alt="user profile"></img>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div id="lodging-details-dropdown">
                    <Dropdown name="Description" isOpen content={lodgingData.description}/>
                    <Dropdown name="Equipements" isOpen content={lodgingData.equipments}/>
                </div>
            </main>
        )
    }
}