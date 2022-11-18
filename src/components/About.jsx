import React from 'react';
import { Link } from "react-router-dom";

export default function About() {

    return(
        <div>
            <div class="about">
                <h3>Made by Geng, Soren, Adriel</h3>
                <p>Made with </p>
                <p>| React Router 6 | TailWind CSS | Ruby |</p>
                <div>
                < Link to="/">Back Home</Link>
            </div>            
        </div>
        </div>
    )
}