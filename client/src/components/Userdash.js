import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import {useQuery} from "@apollo/client"
import {QUERY_USER} from "../Utils/queries.js"
import Usersidebar from './Usersidebar'
import { Container, Header, Input, Grid, Button, Divider } from 'semantic-ui-react'
import BillCard from './BillCard'
import LinkSideBar from './LinkSideBar'

const Userdash = (props) => {
  // const { user } = useQuery(QUERY_USER)

  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios.get(`https://whoismyrepresentative.com/getall_mems.php?zip=07006&output=json`, {headers: {"Access-Control-Allow-Origin": "*"}})
    .then(res => {
      console.log(res.data)
      setMembers(res.data);
    }).catch(error => console.log(error));
  }, []);
  console.log(members)   
  
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
