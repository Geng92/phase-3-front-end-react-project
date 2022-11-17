import React from "react";
// import a generic image such as a map to represent any trip ?

export default function Trip ({ trip }) {

    const { date } = trip;

    return (
        <div>
            <p>{date}</p>
        </div>
    )
}