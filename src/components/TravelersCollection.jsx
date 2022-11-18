import React from 'react';
import Traveler from './Traveler';

export default function TravelersCollection ({ travelers }) {
    
    const travelersCards = travelers.map((traveler) => {
        return (
            <Traveler 
              key={traveler.id}
              traveler={traveler}
            />
        )
    })
    
    return(
    <div>
        <h3>Travelers in our Caravan!</h3>
        <div class="trips">{travelersCards}</div>
    </div>
    )
}