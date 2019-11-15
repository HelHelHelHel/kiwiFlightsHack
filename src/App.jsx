import React, { useState, useEffect } from 'react';
import Flights from './components/Flights.jsx';

 
const App = () => {
   const [flights, setFlights] = useState ([]);
   const [loading, setLoading] = useState (false);
   
   useEffect(() => {
    setLoading(true);   
    async function fetchFlights() {
           const response = await fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=15/11/2019&dateTo=17/11/2019&partner=picky&limit=5');
           const data = await response.json();
           setFlights(data.data);
           setLoading(false); 
           console.log('data', data)
       }
       fetchFlights();
   }, [])
    
    
    
    return (
        
        <Flights
        flights={flights}
        loading={loading}
        />
    )
}
export default App;