import React, {useState, useEffect} from "react";
import DestinationCollection from "./DestinationsCollection";
import DestinationDetails from "./DestinationDetails";

export default function DestinationContainer({}) {
    const [destinations, setDestinations] = useState([])
    const [selectDestinationId, setSelectDestinationId] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/destinations")
        .then((res) => res.json())
        .then((destinationsData) => {
            console.log("destination container loaded successfully")
            setDestinations(destinationsData);
        });
    }, []);

    const selectedDestination = destinations.find((destination) => destination.id === selectDestinationId);
    
    return(
    <div>
        <DestinationCollection destinations={destinations} onClickDestination={setSelectDestinationId}/>
        <DestinationDetails destinations={selectedDestination}/>
    </div>
    )    
}