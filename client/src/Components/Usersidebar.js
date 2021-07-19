import { Container, Header, Grid, Divider, Card } from 'semantic-ui-react'

const Usersidebar = (props) => {
    console.log(props)
    
    return (
        <Container style={{backgroundColor:'maroon', padding:'2em', paddingBottom:'5em', paddingTop:'3em'}}>
            <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Your Legislative District</Header>
            <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>{props.data[0].state}-{props.data[0].district}</Header>
            <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Your Representatives</Header>
            <Divider />
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                    <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Representative</Header>
                    <Card centered link={props.data[0].link}>
                        <Card.Header as='h3' textAlign='center'>{props.data[0].name}</Card.Header>
                        <Card.Content>Address: {props.data[0].office}</Card.Content>
                        <Card.Content>Phone: {props.data[0].phone}</Card.Content>
                    </Card>
                    </Grid.Column>   
                    <Grid.Column>
                    <Header textAlign='center' size='large' style={{color:'antiquewhite'}}>Senators</Header>
                    <Card centered link={props.data[0].link}>
                        <Card.Header as='h3' textAlign='center'>{props.data[1].name}</Card.Header>
                        <Card.Content>Address: {props.data[1].office}</Card.Content>
                        <Card.Content>Phone: {props.data[1].phone}</Card.Content>
                    </Card>
                    <Card centered link={props.data[0].link}>
                        <Card.Header as='h3' textAlign='center'>{props.data[2].name}</Card.Header>
                        <Card.Content>Address: {props.data[2].office}</Card.Content>
                        <Card.Content>Phone: {props.data[2].phone}</Card.Content>
                    </Card>
                    </Grid.Column>   
                </Grid.Row>
            </Grid>
        </Container>
        )}


export default Usersidebar
