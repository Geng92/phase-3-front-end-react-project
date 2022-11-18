import React from "react";
// import a generic image such as a map to represent any trip ?
import image from "./images/trip.png"

export default function Trip ({ trip }) {

    const { date, traveler, destination } = trip;

    return (
        <div class="trip_div">
            <p>{date}</p>
            <img class="image" src={image} alt="img"/>
            <p>Traveler: {traveler.first_name} {traveler.last_name}</p>
            <p>Destination: {destination.location}</p>
        </div>
    )
}