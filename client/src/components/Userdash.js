import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import Usersidebar from './Usersidebar'
import { Container, Header, Grid, Divider } from 'semantic-ui-react'
import BillCard from './BillCard'
import LinkSideBar from './LinkSideBar'
import auth from '../Utils/auth.js';
const tempMember = [{name: "Mikie Sherrill", party: "Democrat", state: "NJ", district: "11", phone: "202-225-5034", office: "1208 Longworth House Office Building; Washington DC 20515-3011", link: "https://sherrill.house.gov/" }, {name: "Robert Menendez", party: "Democrat", state: "NJ", district: "", phone: "202-224-4744", office: "528 Hart Senate Office Building Washington DC 20510", link: "https://www.menendez.senate.gov" }, {name: "Cory Booker", party: "Democrat", state: "NJ", district: "", phone: "202-224-3224", office: "359 Dirksen Senate Office Building Washington DC 20510", link: "https://www.booker.senate.gov" }]
console.log(tempMember)
const Userdash = () => {
  const [userInfo, setUser] = useState([])
  console.log(userInfo)
  const [members, setMembers] = useState([tempMember]);
  // useEffect(() => {
  //   setUser(auth.getUser())
  //   axios
  //     .get(`https://cors-anywhere.herokuapp.com/http://whoismyrepresentative.com/getall_mems.php?zip=07006&output=json`)
  //     .then((res) => {
  //       setMembers(tempMember)
      
  // }, []);
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
              <Usersidebar data={tempMember} />
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
