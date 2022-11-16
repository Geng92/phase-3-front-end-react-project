import React, {useState, useEffect} from "react";
import DestinationCollection from "./DestinationCollection";
import DestinationDetails from "./DestinationDetails";

export default function DestinationContainer({}) {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((destinations) => {
            console.log("destination container loaded successfully")
            setDestinations(destinations);
        });
    }, []);


    return(
    <div>
        <DestinationCollection />
        <DestinationDetails />
    </div>
    )    
}