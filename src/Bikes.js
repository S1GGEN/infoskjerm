import React, { useState, useEffect } from "react";
import createEnturService from '@entur/sdk';

const service = createEnturService({ clientName: 'min_herlige_infoskjerm' })

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        //console.log("Heisann");
        service.getBikeRentalStationsByPosition(
            { latitude: 63.428311, longitude: 10.392514 },
             230
            ).then((data) => setBikeStations(data));
    }, []);

    console.log(bikeStations)

    return <div className="bikeStations">
        <h1>Bysykkelstativ:</h1>
        {bikeStations.map(stationData => (
            <BikeStation key={stationData.id} station={stationData} />
        ))}
        </div>
};

export default Bikes;

const BikeStation = (props) =>  {
    const { station } = props;

    console.log(station);
    return <div className="bikeStation">
        <h3>{station.name}</h3>
        <p>{station.bikesAvailable} ledige sykler</p>
        <p>{station.spacesAvailable} ledige parkeringsplasser</p>
    </div>;
};
