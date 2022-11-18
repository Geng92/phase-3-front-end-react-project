import React from 'react';
import Destination from './Destination';

export default function DestinationCollection ( { destinations, searchQuery, setSearchQuery } ) {
    
    const destinationsCards = destinations.map((destination) => {
        return (
            <Destination 
              key = {destination.id}
              destination={destination}
            />
        )
    })
    const handleOnChange = (e) => setSearchQuery(e.target.value);
    return(
    <div>
        <h3>Destinations on Our Radar!</h3>
        <input 
            type="text" 
            placeholder="take a look..." 
            onChange={handleOnChange}
            value={searchQuery}
            />
        {destinationsCards}
    </div>
    )
}