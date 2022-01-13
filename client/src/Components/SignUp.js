import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function SignUp({ setUser }) {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSignup(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                phone_number,
                email,
                street,
                city,
                state,
                zip,
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
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
                    <Image src='/logo.png' /> Sign-Up
                </Header>
                <Form size='large' onSubmit={handleSignup}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='id card'
                            iconPosition='left'
                            type="text"
                            id="first_name"
                            placeholder="First Name"
                            autoComplete="off"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='id card'
                            iconPosition='left'
                            type="text"
                            id="last_name"
                            placeholder="Last Name"
                            autoComplete="off"
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='phone'
                            iconPosition='left'
                            type="text"
                            placeholder="Phone Number"
                            id="phone_number"
                            autoComplete="off"
                            value={phone_number}
                            onChange={(e) => setPhone_number(e.target.value)}
                        />
                        <Form.Input
                            fluid icon='mail' iconPosition='left' placeholder='E-mail address'
                            type="text"
                            id="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <Form.Input
                            fluid
                            icon='home'
                            iconPosition='left'
                            type="text"
                            id="street"
                            placeholder="Street"
                            autoComplete="off"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='home'
                            iconPosition='left'
                            type="text"
                            placeholder="City"
                            id="city"
                            autoComplete="off"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='home'
                            iconPosition='left'
                            type="text"
                            id="state"
                            placeholder="State"
                            autoComplete="off"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='home'
                            iconPosition='left'
                            type="text"
                            placeholder="Zip Code"
                            id="zip"
                            autoComplete="off"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            type="text"
                            placeholder="Username"
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Confirm Password'
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            autoComplete="current-password"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        <Button color='teal' fluid size='large' type="submit" >
                            Sign-up
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    {/* Already have an account? */}
                     {/* <Link to="/login">Login</Link> */}
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp