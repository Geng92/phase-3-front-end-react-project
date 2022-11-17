import React from 'react';
import Trip from './Trip';

export default function TripDetails ({trips}) {
    if (!trips) return <h3>Select and click on a Trip to learn more!!!</h3>
    
    const tripCards = trips.map((trip) => {
        return (
            <Trip
            key={trip.id}
            trip={trip}/>
        )
    })
    
    return(
    <div>
        <h2>Trip</h2>
        {tripCards}
    </div>
    )
}