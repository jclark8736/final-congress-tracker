import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
} from "semantic-ui-react";
import axios from "axios";
import Billstatus from "./Billstatus";
import Renderbill from "./Renderbill";

const BillCard = () => {
  const [latestBill, setLatestBill] = useState({});
  const [allBills, setAllBills] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.propublica.org/congress/v1/bills/search.json?sort=date&dir=desc",
        {
          headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" },
        }
      )
      .then((res) => {
        console.log(res.data.results);
        setLatestBill(res.data.results[0].bills[0]);
        setAllBills(res.data.results[0].bills)
      })
      .catch((error) => console.log(error));
  }, []);
 console.log(allBills)
  function renderBillStatus(bill) {
    const billStatus = [
      {
        key: "1",
        name: "Introduced",
        date: bill.introduced_date,
      },
      {
        key: "2",
        name: "Passed House",
        status: bill.house_passage,
      },
      {
        key: "3",
        name: "Passed Senate",
        status: bill.senate_passage,
      },
      { key: "4", name: "Became Law", status: bill.enacted },
    ];
    return billStatus;
  }

  return (
    <Container
      style={{
        backgroundColor: "antiquewhite",
        border: "navy",
        padding: "3em",
        margin: "1em",
      }}
    >
      <Grid centered columns={1}>
        <Grid.Column width={12}>
          {allBills.map(function(bill, index){
            return <Renderbill key={index} data={bill}/>
          })}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BillCard;
