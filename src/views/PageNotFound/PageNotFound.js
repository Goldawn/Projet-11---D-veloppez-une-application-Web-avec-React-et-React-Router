import React from 'react';
import {Link} from 'react-router-dom'
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <main id="page-not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
} 