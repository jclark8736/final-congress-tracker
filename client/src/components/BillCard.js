import React, { useEffect, useState } from "react";
import { Card, Button, Header, Container, Grid, Divider } from "semantic-ui-react";
import axios from "axios";

const upperCase = (str) => {str = str.toUpperCase()}
const BillCard = () => {
  const [latestBill, setLatestBill] = useState({});


  useEffect(() => {
    axios.get("https://api.propublica.org/congress/v1/bills/search.json?sort=date&dir=desc",
        {
          headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" },
        }
      )
      .then((res) => {
        console.log(res.data.results[0].bills[0]);
        setLatestBill(res.data.results[0].bills[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  
  
  console.log(latestBill);
  return (
    <Container
      style={{
        backgroundColor: "antiquewhite",
        border: "navy",
        padding: "3em",
        margin: "1em",
      }}
    ><Grid centered columns={1}>
        <Grid.Column width={10}>
      <Card fluid>
        <Card.Content>
          <Card.Header style={{textTransform:'uppercase', fontSize:'1.8rem'}} textAlign='center'>{latestBill.bill_id}</Card.Header>
          <Divider />
          <Card.Header>{latestBill.short_title}</Card.Header> 
          <Card.Description>
            Sponsor: {`${latestBill.sponsor_title} ${latestBill.sponsor_name} ${latestBill.sponsor_party}-${latestBill.sponsor_state} `}
          </Card.Description>
          <Card.Description>
              <br/>
              {latestBill.title}
          </Card.Description>
        </Card.Content> 
      </Card>
      </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BillCard;
