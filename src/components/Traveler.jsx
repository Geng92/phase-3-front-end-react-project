import React from "react";

export default function Traveler ({ traveler, onClick }) {

    const { first_name, last_name, image } = traveler;

    return (
        <div onClick={onClick}>
        <p>{first_name}</p>
            <p>{last_name}</p>
            <img src={image} alt="traveler"/>
        </div>
    )
}