import React from 'react';
import Destination from './Destination';

export default function DestinationCollection ( { destinations } ) {
    
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
        <h3>Destinations on Our Radar!</h3>
        {destinationsCards}
    </div>
    )
}