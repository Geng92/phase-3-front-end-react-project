import React, {useState, useEffect} from 'react';
import Traveler from './Traveler';

export default function TravelersCollection ({travelers, onClickTraveler}) {
    
    const travelersCards = travelers.map((traveler) => {
        return (
            <Traveler 
              key = {traveler.id}
              traveler={traveler}
              onClickTraveler={onClickTraveler}
            />
        )
    })
    
    return(<div>{travelersCards}</div>)
}