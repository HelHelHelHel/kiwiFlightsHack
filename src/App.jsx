import React, { useState, useEffect } from 'react';
import Flights from './components/Flights.jsx';

import FlightForm from './components/FlightForm.jsx'

 
const App = () => {
   const [flights, setFlights] = useState ([]);
   const [loading, setLoading] = useState (false);
   const [departure, setDeparture] = useState ('PRG');
   const [arrival, setArrival] = useState ('VLC');

   
    useEffect(() => {
        setLoading(true);   
        async function fetchFlights() {
            const response = await fetch(`https://api.skypicker.com/flights?flyFrom=${departure}&to=${arrival}&dateFrom=15/11/2019&dateTo=17/11/2019&partner=picky&limit=5`);
            const data = await response.json();
            setFlights(data.data);
            setLoading(false); 
            console.log('data', data)
        }
        fetchFlights();
    }, [departure, arrival])
 
    const changeDest = (dep, arr) => {
        setDeparture(dep);
        setArrival(arr);
    }
    
    return (
        <>
            <h1>Flight with us</h1>
            <FlightForm
                onClick = {changeDest}
                />
            <Flights
                flights={flights}
                loading={loading}
            />
        </>
    )
}
export default App;