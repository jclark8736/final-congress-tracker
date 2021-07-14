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
        
          <Grid.Column width={6}>
            <Button fluid color={props.status === null ? ('grey') : ('green')} >{props.name}</Button>
          </Grid.Column>
        

    )
}

export default Billstatus
