import React from 'react';
import Traveler from './Traveler';

export default function TravelerDetails ({travelers}) {
    if (!travelers) return <h3>Select and click on a Traveler to learn more!!!</h3>

    const travelersCards = travelers.map((traveler) => {
        return (
            <Traveler 
              key = {traveler.id}
              traveler={traveler}
            />
        )
    })
    return(
    <div>
        <h2>Traveler</h2>
        {travelersCards}
    </div>
    )
}