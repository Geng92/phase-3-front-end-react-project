import React, {useState, useEffect} from 'react';
import TravelersCollection from './TravelersCollection';
import TravelerDetails from './TravelerDetails';

//API = ("http://localhost:9292/travelers")
export default function TravelersContainer({}){
    const [travelers, setTravelers] = useState([])
    const [selectTravelerId, setSelectTravelerId] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/travelers")
        .then((res) => res.json())
        .then((travelersData) => {
            console.log("travelers container loaded successfully")
            setTravelers(travelersData);
        });
    }, []);

    const selectedTraveler = travelers.find((traveler) => traveler.id === selectTravelerId);
    
    return(
    <div>
        <p><TravelersCollection travelers={travelers} onClickTraveler={setSelectTravelerId}/></p>
        <p><TravelerDetails travelers={selectedTraveler}/></p>
    </div>
    )
}