import { Form, Grid, Container, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <Container centered style={{backgroundColor:'antiquewhite', border:'navy', padding:'3em', margin:'1em'}}>
            <Header textAlign='center'>LOGIN</Header>
            <Grid centered columns={1}>
                <Grid.Column width={8}>
            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Button color='green'>Submit</Button>
                <div>
                <Link to='/signup'>Not a member, sign up here</Link>
                </div>
            </Form>
            </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Login
