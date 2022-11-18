import React, {useState, useEffect} from "react";
import DestinationForm from "./DestinationForm";
import DestinationsCollection from "./DestinationsCollection";

export default function DestinationContainer() {
    const [destinations, setDestinations] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    

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

    
    const destinationsToDisplay = destinations.filter((destination) => 
          destination.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    
    return(
    <div>
        <DestinationForm onAddDestination={onAddDestination}/>
        <DestinationsCollection destinations={destinationsToDisplay} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
    )    
}