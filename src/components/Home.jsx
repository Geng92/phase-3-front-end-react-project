import React from 'react';
import { Link } from 'react-router-dom';


export default function Home () {

    return(
        <div>
            <h1>WELCOME TO OUR CARAVAN</h1>
            <div>
            < Link to="caravan">The Caravan</Link>
            </div>
            < Link to="about">About Us</Link>
        </div>
    )
}