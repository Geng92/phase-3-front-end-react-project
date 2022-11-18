import React from "react";

export default function Traveler ({ traveler }) {

    const { first_name, last_name, image } = traveler;

    return (
        <div class="traveler">
            <img class="image" src={image} alt="traveler"/>
        <p>{first_name} {last_name}</p>
        </div>
    )
}