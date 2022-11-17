import React from 'react';
import Trip from './Trip';

export default function TripDetails ({trips}) {
    
    const tripCards = trips.map((trip) => {
        return (
            <Trip
            key={trip.id}
            trip={trip}/>
        )
    })
    return(<div>{tripCards}</div>)
}