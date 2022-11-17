import React, {useState, useEffect} from 'react';
import TravelersCollection from './TravelersCollection';
import TravelerDetails from './TravelerDetails';

//API = ("http://localhost:9292/travelers")
export default function TravelersContainer({}){
    const [travelers, setTravelers] = useState([])
    const [travelerDetails, setTravelersDetails] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/travelers")
        .then((res) => res.json())
        .then((travelersData) => {
            console.log("travelers container loaded successfully")
            setTravelers(travelersData);
        });
    }, []);
    
    return(
    <div>
        <p><TravelersCollection travelers={travelers}/></p>
        {/* <p><TravelerDetails travelers={travelerDetails}/></p> */}
    </div>
    )
}