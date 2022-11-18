import React, {useState, useEffect} from 'react';
import TripsCollection from './TripsCollection';

export default function TravelersContainer(){
    const [trips, setTrips] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/trips")
        .then((res) => res.json())
        .then((tripsData) => {
            console.log("trips container loaded successfully")
            setTrips(tripsData);
        });
    }, []);

    return(
    <div>
        <TripsCollection trips={trips} />
    </div>
    )
}