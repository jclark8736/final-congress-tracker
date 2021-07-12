import React from 'react'
import { Container, Header, Input, Grid, Button } from 'semantic-ui-react'

const SearchSideBar = () => {
    return (
        <Container style={{backgroundColor:'maroon', padding:'2em', paddingBottom:'5em', paddingTop:'3em'}}>
            <Header size='large' style={{color:'white'}}>Search Bills By Topic:</Header>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                    <Input fluid inverted icon='search' placeholder='Search Bill Topics' />
                    </Grid.Column>   
                </Grid.Row>
                <Header size='large' style={{color:'white'}}>Search Bills By Timeframe:</Header>

                <Grid.Row columns={1}>
                    <Grid.Column>
                    <Button inverted fluid >Search Previous Week</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                    <Button inverted fluid >Search Previous Month</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                    <Button inverted fluid >Search Entire Session</Button>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>


        </Container>
    )
}

export default SearchSideBar
