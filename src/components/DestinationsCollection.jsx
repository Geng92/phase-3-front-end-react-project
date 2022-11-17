import React from 'react';
import Destination from './Destination';

export default function DestinationCollection ({destinations, onClickDestination}) {
    
    const destinationsCards = destinations.map((destination) => {
        return (
            <Destination 
              key = {destination.id}
              destination={destination}
              onClickDestination={onClickDestination}
            />
        )
    })
    
    return(
    <div>
        {destinationsCards}
    </div>
    )
}