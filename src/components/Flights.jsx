import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { DateTime } from 'luxon';

const Flights = props => {

    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 5;
    const handleBackBtn = (e) => {
        setCurrentPage(Math.max(currentPage - 1, 0))
        document.getElementById("nextBtn").classList.remove('btn-danger');
        if(currentPage == 0) {
            e.target.classList.add('btn-danger');
        }
    }
    const handleNextBtn = (e) => {
        setCurrentPage(Math.min(currentPage + 1, Math.ceil(props.flights.length / 5) - 1));
        if(currentPage >= Math.ceil(props.flights.length / 5) - 2) {
            e.target.classList.add('btn-danger')
            console.log(e.target)
        }
        document.getElementById("backBtn").classList.remove('btn-danger');
    }


    let content = ('');
    if(props.loading) {
        content = <div>Loading...</div>
    } else if(props.loading === undefined){
        content = (<div>Hello, please choose your flight!</div>);
    } else if(Array.isArray(props.flights) &&  props.flights.length == 0) {
        content = (<div>Sorry, no direct flights...</div>);
    } else {   
        content = (
            <div>
                <hr/>
                <Form>
                    <Button onClick={handleBackBtn} id="backBtn">Back</Button>
                    <span style= {{padding:'2rem'}}>{currentPage + 1}</span>
                    <Button onClick={handleNextBtn} id="nextBtn">Next</Button>
                </Form>
                <hr/>
                {
                    props.flights.slice(currentPage * perPage, currentPage * perPage + perPage).map((flight, key) => (
                        <div key={key}>
                            <div>From: { flight.cityFrom }</div>
                            <div>To: { flight.cityTo }</div>
                            <div>Departure Time: { DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm') }</div>
                            <div>Arrival Time: { DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm') }</div>
                            <div>Price: { flight.price } Eur</div>
                            <div>Transfers: { flight.route.length - 1 }</div>
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