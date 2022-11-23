import React from 'react';
import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'
import './About.css'

export default function About() {

    const AboutContent = {
        fiabilite: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        responsabilite: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }

    return (
        <main id="about-us">
            <Banner />
            <div id="dropdown-container">
                <Dropdown name="Fiabilité" content={AboutContent.fiabilite}/>
                <Dropdown name="Respect" content={AboutContent.respect}/>
                <Dropdown name="Service" content={AboutContent.service}/>
                <Dropdown name="Responsabilité" content={AboutContent.responsabilite}/>
            </div>
        </main>
    )
}