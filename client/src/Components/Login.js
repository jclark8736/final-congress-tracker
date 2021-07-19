import { Form, Grid, Container, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../Utils/mutations';

import Auth from '../Utils/auth';
const Login = () => {
    //~~~~~~~~~~
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    //~~~~~~~~~~~~~~~~

    return (
        <Container centered style={{ backgroundColor: 'antiquewhite', border: 'navy', padding: '3em', margin: '1em' }}>
            <Header textAlign='center'>LOGIN</Header>
            <Grid centered columns={1}>
                <Grid.Column width={8}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email'
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password'
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange} />
                        </Form.Field>
                        <Button color='green'>Submit</Button>
                        <div>
                            <Link to='/signup'><Button color='blue' style={{margin:'auto', marginTop:'1.5em'}}>Not a member, sign up here</Button></Link>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Login
