import React, {useState, useEffect} from 'react';
import TravelersCollection from './TravelersCollection';
import TravelerDetails from './TravelersDetails';


export default function TravelersContainer({}){
    const [travelers, setTravelers] = useState([])

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((travelers) => {
            console.log("travelers container loaded successfully")
            setTravelers(travelers);
        });
    }, []);
    
    return(
    <div>
        <TravelersCollection />
        <TravelerDetails />
    </div>
    )
}