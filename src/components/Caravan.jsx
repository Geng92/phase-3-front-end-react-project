import React from 'react';
import TravelersContainer from './TravelersContainer';
import TripsContainer from './TripsContainer';
import DestinationsContainer from './DestinationsContainer';

export default function Caravan () {

    return(
    <div>
        <header>
        <div>
            <TripsContainer/>
        </div>
        <div>
            <TravelersContainer/>
        </div>
        <div>
            <DestinationsContainer/>
        </div>
        </header>
    </div>
    )
}