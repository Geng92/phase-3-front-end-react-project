import React from "react";
// import a generic image such as a map to represent any trip ?
import image from "./images/trip.png"

export default function Trip ({ trip }) {

    const { date } = trip;

    return (
        <div>
            <img src={image}/>
            <p>
                {date}
            </p>
        </div>
    )
}