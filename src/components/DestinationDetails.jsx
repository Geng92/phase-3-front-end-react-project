import React from 'react';
import Destination from './Destination';

export default function DestinationCollection ({destinations}) {
    
    const destinationsCards = destinations.map((destination) => {
        return (
            <Destination 
              key = {destination.id}
              destination={destination}
            />
        )
    })
    
    return(<div>{destinationsCards}</div>)
}