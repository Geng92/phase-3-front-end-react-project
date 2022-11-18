import React, {useState, useEffect} from "react";
import DestinationForm from "./DestinationForm";
import DestinationCollection from "./DestinationsCollection";

export default function DestinationContainer() {
    const [destinations, setDestinations] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:9292/destinations")
        .then((res) => res.json())
        .then((destinationsData) => {
            console.log("destination container loaded successfully")
            setDestinations(destinationsData);
        });
    }, []);

    const onAddDestination = (newDestination) => {
        setDestinations([...destinations, newDestination]);
    }
    
    return(
    <div>
        <DestinationCollection destinations={destinations} />
        <DestinationForm onAddDestination={onAddDestination}/>
    </div>
    )    
}