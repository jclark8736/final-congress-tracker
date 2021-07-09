import {
    Image,
    Header,
    Container,
    Grid,
    Segment,
    Divider,
  } from "semantic-ui-react";
  
  const PageHead = () => {
    const headingStyle = {};
    return (
      <div>
        <Container fluid>
          <Header
            inverted
            style={{
              height: 480,
              // display: "inline-block",
              opacity: 0.9,
              backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/commons/a/a3/United_States_Capitol_west_front_edit2.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: 'center',
              fontWeight: "normal",
              marginBottom: 0,
            }}
          >
            <Divider hidden />
            <Divider hidden />
            <Grid columns={2}>
              <Grid.Column
                width={7}
                style={{
                  padding: '2em',
                  paddingBottom: '6em',
                  margin: '2em',
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  color: "white",
                  width: "50%",
                }}
              >
                <h1>What is Happening in the United States Congress</h1>
                <Grid.Column width={7}>
                  A snapshot of the most current bills in the U.S. Congress: what
                  they are about, and who is voting on them. Because knowing is
                  half the battle..
                </Grid.Column>
              </Grid.Column>
            </Grid>
          </Header>
        </Container>
      </div>
    );
  };
  
  export default PageHead;