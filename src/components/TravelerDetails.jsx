import React from 'react';
import Traveler from './Traveler';

export default function TravelerDetails ({travelers}) {
    
    const travelersCards = travelers.map((traveler) => {
        return (
            <Traveler 
              key = {traveler.id}
              traveler={traveler}
            />
        )
    })
    return(<div>{travelersCards}</div>)
}