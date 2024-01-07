import React from "react";
import {Container} from "reactstrap"

const Footer=()=>{
    return(
        <Container 
        fluid
        tag="footer"
        className="text-center text-uppercase bg-info text-white fixed-bottom p-3"
        >
        Github search app with Firebase
        </Container>
    )
}

export default Footer;