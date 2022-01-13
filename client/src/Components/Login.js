import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"


import { Button, Form, Grid, Header, Image, Message,  Segment } from 'semantic-ui-react'

function Login({ setUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleLoging(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json()
                        .then((user) => setUser(user));
                }
            });
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={handleLoging} >
                    <Segment stacked>
                        <Form.Input
                            type="text"
                            id="username"
                            placeholder='Username'
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            fluid icon='user'
                            iconPosition='left'
                        />
                        <Form.Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                        />

                        <Button color='teal' fluid size='large' type="submit">
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? 
                    <Link to="/signup">Signup</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login