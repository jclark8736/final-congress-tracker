import { Form, Grid, Container, Header, Button } from 'semantic-ui-react'

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../Utils/mutations';

import Auth from '../Utils/auth';


const Signup = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        zip: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: name === "zip" ? parseInt(value) : value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <Container centered style={{ backgroundColor: 'antiquewhite', border: 'navy', padding: '3em', margin: '1em' }}>
            <Header textAlign='center'>SIGNUP</Header>
            <Grid centered columns={1}>
                <Grid.Column width={8}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' 
                             name="firstName"
                             type="text"
                             value={formState.firstName}
                             onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' 
                            name="lastName"
                            type="text"
                            value={formState.lastName}
                            onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' 
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Zip Code</label>
                            <input placeholder='Zip' 
                            name="zip"
                            type="number"
                            value={formState.zip}
                            onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='password' 
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}/>
                        </Form.Field>
                        <Button color='green'>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Signup
