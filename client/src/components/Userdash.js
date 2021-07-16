import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import {useQuery} from "@apollo/client"
import {QUERY_USER} from "../Utils/queries.js"
import Usersidebar from './Usersidebar'
import { Container, Header, Grid, Button, Divider } from 'semantic-ui-react'
import BillCard from './BillCard'
import LinkSideBar from './LinkSideBar'
import auth from '../Utils/auth.js';

const Userdash = () => {
  const [userInfo, setUser] = useState({})
  console.log(userInfo)
// const { user } = useQuery(QUERY_USER)
// Hit DB for zip and fav bills
// Hit zip route for reps, set this to state
// Set favorite bills into state
// Render components using state data.
  const [members, setMembers] = useState([]);
  useEffect(() => {
    setUser(auth.getUser())
    axios
      .get('/sponsor')
        //What is the path for the backend?
      .then((res) => {
        console.log(res.data.results);
        setMembers(res.data.results[0].bills[0]);
      })
      .catch((error) => console.log(error));
  }, []);
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
