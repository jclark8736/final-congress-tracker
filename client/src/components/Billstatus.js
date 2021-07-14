import React from 'react'
import {
    Card,
    Button,
    Header,
    Container,
    Grid,
    Divider,
  } from "semantic-ui-react";
  
const Billstatus = (props) => {
    return (
        
            <Button fluid color={props.status === null ? ('grey') : ('green')} style={{margin:'.5em'}} >{props.name}</Button>
        

    )
}

export default Billstatus
