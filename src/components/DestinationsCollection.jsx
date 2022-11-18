import React from 'react';
import Destination from './Destination';

export default function DestinationCollection ( { destinations, searchQuery, setSearchQuery, onVisitDestination } ) {
    
    const destinationsCards = destinations.map((destination) => {
        return (
            <Destination 
              key = {destination.id}
              destination={destination}
              onVisitDestination={onVisitDestination}
            />
        )
    })
    
    const handleOnChange = (e) => setSearchQuery(e.target.value);
    
    return(
        <div>
        <h3>Destinations on Our Radar!</h3>
        <div class="destinations">
        <input 
            type="text" 
            placeholder="take a look..." 
            onChange={handleOnChange}
            value={searchQuery} 
        />
        <p>Let us know which destination we should take a closer look at with the star!</p>
        </div>
        <div class="trips">{destinationsCards}</div>
    </div>
    )
}