import React, {useState, useEffect} from 'react';
import TravelerForm from './TravelerForm';
import TravelersCollection from './TravelersCollection';


export default function TravelersContainer(){
    const [travelers, setTravelers] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:9292/travelers")
        .then((res) => res.json())
        .then((travelersData) => {
            console.log("travelers container loaded successfully")
            setTravelers(travelersData);
        });
    }, []);
    
    const onAddTraveler = (newTraveler) => {
        setTravelers([...travelers, newTraveler]);
    }

    return(
    <div>
        <TravelersCollection travelers={travelers} />
        <TravelerForm onAddTraveler={onAddTraveler}/>
    </div>
    )
}