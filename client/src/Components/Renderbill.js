import {
  Card,
  Button,
  Header,
  Grid,
  Divider,
  Table,
} from "semantic-ui-react";
import Billstatus from "./Billstatus";


const Renderbill = (props) => {
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
        <Card fluid>
        <Card.Content>
          <Card.Header
            style={{ textTransform: "uppercase", fontSize: "1.8rem" }}
            textAlign="center"
          >
            {props.data.bill_id}
          </Card.Header>
          <Divider />
          <Card.Header>{props.data.short_title}</Card.Header>
          <Card.Description>
            Sponsor:{" "}
            {`${props.data.sponsor_title} ${props.data.sponsor_name} ${props.data.sponsor_party}-${props.data.sponsor_state} `}
          </Card.Description>
          <Card.Description>
            <br />
            {props.data.title}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header size='small' textAlign='center'>Bill Status</Header>
                {renderBillStatus(props.data).map((bill) => {
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
                  <a href={props.data.govtrack_url}>GovTrack Bill Link</a>
                </Button>
                <Button fluid>
                  <a href={props.data.congressdotgov_url}>
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
                      {!props.data.cosponsors_by_party
                        ? ""
                        : props.data.cosponsors_by_party.D}
                    </Table.Cell>
                    <Table.Cell style={{ color: "Red" }}>
                      {!props.data.cosponsors_by_party
                        ? ""
                        : props.data.cosponsors_by_party.R}
                    </Table.Cell>
                  </Table.Row>
                </Table>
              </Grid.Column>
              
              <Button color='orange' style={{margin: 'auto', marginTop:'1.5em'}} centered >Make Favorite</Button>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
}

export default Renderbill
