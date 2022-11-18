import React from "react";
import Destination from "./Destination";
// import a generic image such as a map to represent any trip ?
import image from "./images/trip.png"

export default function Trip ({ trip }) {

    const { date, traveler, destination } = trip;

    return (
        <div>
            <p>{date}</p>
            <img src={image}/>
            <p>{traveler.first_name} {traveler.last_name}</p>
            <p>{destination.location}</p>
        </div>
    )
}