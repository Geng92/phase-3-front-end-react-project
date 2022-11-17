import React, {useState, useEffect} from 'react';
import Traveler from './Traveler';

export default function TravelersCollection ({travelers}) {
    
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