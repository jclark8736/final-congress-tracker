import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Header,
  Container,
  Grid,
  Divider,
  Table,
} from "semantic-ui-react";
import axios from "axios";
import Billstatus from "./Billstatus";

const BillCard = () => {
  const [latestBill, setLatestBill] = useState({});
  const [sponsorInfo, setSponser] = useState({});
  console.log(latestBill);

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
      })        
      .catch((error) => console.log(error));
  }, []);

  console.log(sponsorInfo);

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
          <Card fluid>
            <Card.Content>
              <Card.Header
                style={{ textTransform: "uppercase", fontSize: "1.8rem" }}
                textAlign="center"
              >
                {latestBill.bill_id}
              </Card.Header>
              <Divider />
              <Card.Header>{latestBill.short_title}</Card.Header>
              <Card.Description>
                Sponsor:{" "}
                {`${latestBill.sponsor_title} ${latestBill.sponsor_name} ${latestBill.sponsor_party}-${latestBill.sponsor_state} `}
              </Card.Description>
              <Card.Description>
                <br />
                {latestBill.title}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header size='small' textAlign='center'>Bill Status</Header>
                    {renderBillStatus(latestBill).map((bill) => {
                      return (
                        <Billstatus
                          key={bill.key}
                          name={bill.name}
                          status={bill.status}
                        />
                      );
                    })}
                  </Grid.Column>
                  <Grid.Column>
                    <Header size="small" textAlign="center">
                      Additional Info
                    </Header>
                    <Button fluid>
                      <a href={latestBill.govtrack_url}>GovTrack Bill Link</a>
                    </Button>
                    <Button fluid>
                      <a href={latestBill.congressdotgov_url}>
                        Congress.gov Bill Link
                      </a>
                    </Button>
                    <Header textAlign="center" size="tiny">
                      Co-Sponsers By Party
                    </Header>
                    <Table celled textAlign="center">
                      <Table.Row>
                        <Table.Cell>Democrat</Table.Cell>
                        <Table.Cell>Republican</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell style={{ color: "blue" }}>
                          {!latestBill.cosponsors_by_party
                            ? ""
                            : latestBill.cosponsors_by_party.D}
                        </Table.Cell>
                        <Table.Cell style={{ color: "Red" }}>
                          {!latestBill.cosponsors_by_party
                            ? ""
                            : latestBill.cosponsors_by_party.R}
                        </Table.Cell>
                      </Table.Row>
                    </Table>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BillCard;
