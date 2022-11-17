import React from "react";

export default function Traveler ({ traveler }) {

    const { first_name, last_name, image } = traveler;

    return (
        <div>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{image}</p>
        </div>
    )
}