import { useState } from 'react';
import {useHistory} from 'react-router-dom'

function Edit({ handleUpdatedUser, user }) {

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const history = useHistory()



    function handleUpdateClick(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                phone_number: phone_number,
                email: email,
                street: street,
                city: city,
                state: state,
                zip: zip,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                handleUpdatedUser(data)
            })
        setFirst_name("")
        setLast_name("")
        setPhone_number("")
        setEmail("")
        setStreet("")
        setCity("")
        setState("")
        setZip("")

        history.push('/admin')

    }

    return (
        <div >

            <div className='container d-flex justify-content-center align-items-center mt-5'>
                <div className="row">
                    <div className="col-xl-12 ">
                        <div className="card shadow">                            
                            <div className="card-body">
                                <h5 className='card-title'>Edit User Info</h5>
                                <form className='validated-form' onSubmit={handleUpdateClick}>
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
                                        <button className='btn btn-success' type="submit">
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Edit
