import React, {useState, useEffect} from 'react';
import TripsCollection from './TripsCollection';
import TripDetails from './TripsDetails';


export default function TravelersContainer(){
    const [trips, setTrips] = useState([])
    const [selectTripId, setSelectTripId] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/trips")
        .then((res) => res.json())
        .then((tripsData) => {
            console.log("trips container loaded successfully")
            setTrips(tripsData);
        });
    }, []);
    
    const selectedTrip = trips.find((trip) => trip.id === selectTripId);

    const onAddTrip = (newTrip) => {
        setTrips([...trips, newTrip]);
    }

    return(
    <div>
        <TripsCollection trips={trips} onClickTrip={setSelectTripId}/>
        <TripDetails trips={selectedTrip}/>
        <TripForm onAddTrip={onAddTrip}/>
    </div>
    )
}