import React from 'react';
import { Link } from 'react-router-dom';


export default function Home () {

    return(
        <div>
        <h1>WELCOME TO OUR CARAVAN</h1>
        <div class="nav">
        < Link to="caravan">The Caravan</Link>
        < Link to="about">About Us</Link>
        </div>
    </div>
    )
}