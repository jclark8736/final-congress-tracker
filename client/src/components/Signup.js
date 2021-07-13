import { Form, Grid, Container, Header, Button } from 'semantic-ui-react'

const Signup = () => {
    return (
        <Container centered style={{backgroundColor:'antiquewhite', border:'navy', padding:'3em', margin:'1em'}}>
            <Header textAlign='center'>SIGNUP</Header>
            <Grid centered columns={1}>
                <Grid.Column width={8}>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <label>Zip Code</label>
                    <input placeholder='Zip' />
                </Form.Field>
                <Form.Field>
                    <label>Zip Code</label>
                    <input placeholder='password' />
                </Form.Field>
                <Button color='green'>Submit</Button>
            </Form>
            </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Signup
