import React from 'react'
import {
    Button,
  } from "semantic-ui-react";
  
const Billstatus = (props) => {
    return (
        <>
            <Button fluid color={props.status === null ? ('grey') : ('green')} style={{margin:'.7em'}}>{props.name}</Button>
        </>

    )
}

export default Billstatus
