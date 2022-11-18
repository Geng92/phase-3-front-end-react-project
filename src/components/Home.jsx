import React from 'react';
import { Link } from 'react-router-dom';


export default function Home () {

    return(
        <div>
            <h1>WELCOME TO OUR CARAVAN</h1>
            < Link to="about"> Click to view our About page</Link>
            < Link to="caravan"> Click to view our Caravan page</Link>
        </div>
    )
}