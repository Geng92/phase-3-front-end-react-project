import React, {useState, useEffect} from 'react';
import TripsCollection from './TripsCollection';
import TripDetails from './TripsDetails';


export default function TravelersContainer(){
    const [trips, setTrips] = useState([])
    const [tripDetails, setTripDetails] = useState([])

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((trips) => {
            console.log("trips container loaded successfully")
            setTrips(trips);
        });
    }, []);
    
    return(
    <div>
        <TripsCollection trips={trips}/>
        <TripDetails trips={tripDetails}/>
        <TripForm />
    </div>
    )
}