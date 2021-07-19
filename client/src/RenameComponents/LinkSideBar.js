import React from "react";
import { Container, Header, Image, Grid } from "semantic-ui-react";
const LinkSideBar = () => {
  return (
    <Container style={{
        backgroundColor: 'maroon',
        padding: '2em',
        color:'white'
    }}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column >
            <Header size='medium' style={{color: '#ffffff'}}><a style={{color:'white'}} href="https://live.house.gov/">
              United States Congress Live Session
            </a></Header>
          </Grid.Column>
          <Grid.Column>
            <Image
              size="small"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Seal_of_the_United_States_House_of_Representatives.svg/240px-Seal_of_the_United_States_House_of_Representatives.svg.png"
              }
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Header size='medium'>
          <a style={{color:'white'}} href="https://www.senate.gov/floor/index.htm">
            United States Senate Live Session
          </a>
          </Header>
          </Grid.Column>
          <Grid.Column>
            <Image
              size="small"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/US-Senate-UnofficialAltSeal.svg/240px-US-Senate-UnofficialAltSeal.svg.png"}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Header size='medium'>
          <a style={{color:'white'}} href="https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/">
            The Executive Branch
          </a>
          </Header>
          </Grid.Column>
          <Grid.Column>
            <Image
              size="small"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/240px-Seal_of_the_President_of_the_United_States.svg.png"}
            />
          </Grid.Column>
        </Grid.Row>
        </Grid>
    </Container>
  );
};

export default LinkSideBar;
