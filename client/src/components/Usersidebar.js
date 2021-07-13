import { Container, Header, Input, Grid, Button, Divider } from 'semantic-ui-react'

const Usersidebar = (props) => {
    return (
        <Container style={{backgroundColor:'maroon', padding:'2em', paddingBottom:'5em', paddingTop:'3em'}}>
            <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Your Representatives</Header>
            <Divider />
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                    <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Senators</Header>
                    </Grid.Column>   
                    <Grid.Column>
                    <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Representatives</Header>
                    </Grid.Column>   
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Usersidebar
