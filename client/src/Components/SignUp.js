import { useState } from "react"
import { Link } from "react-router-dom"


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
        <div >

            <div className='container d-flex justify-content-center align-items-center mt-5'>
                <div className="row">
                    <div className="col-xl-12 ">
                        <div className="card shadow">
                            <img src="https://images.unsplash.com/photo-1516528706953-b0907c20ef78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNsZWFuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='card-img-top img-fluid ' />
                            <div className="card-body">
                                <h5 className='card-title'>Sign Up</h5>
                                <form className='validated-form' onSubmit={handleSignup}>
                                    <div className='mb-3' >
                                        <input className="form-control"
                                            type="text"
                                            id="first_name"
                                            placeholder="First Name"
                                            autoComplete="off"
                                            autoFocus
                                            value={first_name}
                                            onChange={(e) => setFirst_name(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
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
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
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
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            placeholder='E-mail address'
                                            type="text"
                                            id="email"
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            type="text"
                                            id="street"
                                            placeholder="Street"
                                            autoComplete="off"
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            type="text"
                                            placeholder="City"
                                            id="city"
                                            autoComplete="off"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            type="text"
                                            id="state"
                                            placeholder="State"
                                            autoComplete="off"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            type="text"
                                            placeholder="Zip Code"
                                            id="zip"
                                            autoComplete="off"
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            type="text"
                                            placeholder="Username"
                                            id="username"
                                            autoComplete="off"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            placeholder='Password'
                                            type='password'
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            placeholder='Confirm Password'
                                            type="password"
                                            id="password_confirmation"
                                            value={passwordConfirmation}
                                            autoComplete="current-password"
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button className='btn btn-success' type="submit" >
                                            Sign-up
                                        </button>
                                    </div>
                                    <p>Already have an account? <Link to="/login">Login</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp