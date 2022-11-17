import React from "react";

export default function Destination ({ destination, onClickDestination }) {

    const { location, climate, image, population } = destination;

    return (
        <div onClick={onClickDestination}>
            <p>{location}</p>
            <p>{climate}</p>
            <p>{image}</p>
            <p>{population}</p>
        </div>
    )
}