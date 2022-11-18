import React from "react";

export default function Destination ({ destination }) {

    const { location, climate, image, population, visited } = destination;

    return (
        <div>
            <p>{location}</p>
            <p>{climate}</p>
            <p>{image}</p>
            <p>{population}</p>
        </div>
    )
}