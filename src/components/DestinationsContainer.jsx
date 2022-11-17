import React, {useState, useEffect} from "react";
import DestinationCollection from "./DestinationCollection";
import DestinationDetails from "./DestinationDetails";

export default function DestinationContainer({}) {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/destinations")
        .then((res) => res.json())
        .then((destinationsData) => {
            console.log("destination container loaded successfully")
            setDestinations(destinationsData);
        });
    }, []);


    return(
    <div>
        <DestinationCollection destinations={destinations}/>
        <DestinationDetails destinations={destinations}/>
    </div>
    )    
}