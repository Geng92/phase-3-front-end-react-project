import React from 'react';
import Trip from './Trip';

export default function TripsCollection ({trips}) {
    
    const tripCards = trips.map((trip) => {
        return (
            <Trip
            key={trip.id}
            trip={trip}
            />
        )
    })
    
    return(
    <div>
        <h3>How Many trips our Caravan has been on!</h3>
        <div class="trips">{tripCards}</div>    
    </div>
    )
}