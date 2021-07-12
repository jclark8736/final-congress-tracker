import React from "react";
import SearchSideBar from "./SearchSideBar";
import LinkSideBar from "./LinkSideBar";
import BillCard from "./BillCard";

import { Container, Grid, Header, Divider } from "semantic-ui-react";

const MainPage = () => {
  return (
    <div>
      <Container fluid>
        <Grid equal>
          <Grid.Row columns={3}>
            <Grid.Column
              width={3}
              style={{
                marginLeft: "2em",
              }}
            >
              <SearchSideBar />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header
                size="huge"
                textAlign="center"
                style={{
                  color: "white",
                  margin: "auto",
                }}
              >
                This is the most recent bill introduced by the U.S. Congress
              </Header>
              <Divider horizontal section />
              <BillCard />
            </Grid.Column>
            <Grid.Column width={4} style={{}}>
              <LinkSideBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
