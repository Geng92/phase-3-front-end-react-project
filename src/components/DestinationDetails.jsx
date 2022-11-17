import React from 'react';
import Destination from './Destination';

export default function DestinationCollection ({destinations}) {
    if (!destinations) return <h3>Select and click on a Destination to learn more!!!</h3>
    
    const destinationsCards = destinations.map((destination) => {
        return (
            <Destination 
              key = {destination.id}
              destination={destination}
            />
        )
    })
    
    return(
    <div>
        <h3>Destination</h3>
        {destinationsCards}
    </div>
    )
}