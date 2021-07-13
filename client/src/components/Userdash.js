import React from 'react'
import Usersidebar from './Usersidebar'
import { Container, Header, Input, Grid, Button, Divider } from 'semantic-ui-react'
import BillCard from './BillCard'
import LinkSideBar from './LinkSideBar'
const Userdash = () => {
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
              <Usersidebar />
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
                Your Favorite Bills
              </Header>
              <Divider horizontal section />
              <BillCard />
            </Grid.Column>
            <Grid.Column width={4} >
              <LinkSideBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
    )
}

export default Userdash
