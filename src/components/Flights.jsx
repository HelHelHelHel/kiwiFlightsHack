import React from 'react';
import { DateTime } from 'luxon';

const Flights = props => {
    
    let content = ('');
    if(props.loading === true) {
        content = <div>Loading...</div>
    
    } else {   
        content = (
            <div>
                {
                    props.flights.map((flight, key) => (
                        <div key={key}>
                            <div>{ flight.flyFrom }</div>
                            <div>{ flight.flyTo }</div>
                            <div>{ DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm') }</div>
                            <div>{ DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm') }</div>
                            <div>{ flight.price }</div>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        )
    } 

    
    return (
        <>
            { content }
        </>
    )
}

export default Flights;