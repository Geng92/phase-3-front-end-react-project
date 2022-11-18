import React from "react";

export default function Destination ({ destination }) {

    const { location, climate, image, population, visited } = destination;

    return (
        <div>
            <img src={image} />
            <p>{location}</p>
            <p>{climate}</p>
            <p>{population}</p>
        </div>
    )
}