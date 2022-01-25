import React from 'react'
import { useState } from "react"


function Admin({ setAdmin }) {

    const [password, setPassword] = useState("")

    function handleAdminLoging(e) {
        e.preventDefault();
        fetch("/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json()
                        .then(() => setAdmin(true));
                }
                else {
                    alert("You're not an Admin!")
                }
            });
    }

    return (
        <>
            <div className='container d-flex justify-content-center align-items-center mt-5'>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                        <div className="card shadow">
                            <img src="https://images.unsplash.com/photo-1582479429421-321775166674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className='card-img-top' />
                            <div className="card-body">
                                <h5 className='card-title'>Admin Log In</h5>
                                <form className='validated-form' onSubmit={handleAdminLoging} >
                                    {/* <div className="mb-3">
                                        <input className='form-control'
                                            type="text"
                                            id="username"
                                            placeholder='Username'
                                            autoComplete="off"
                                            autoFocus
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div> */}
                                    <div className='mb-3' >
                                        <input className="form-control"
                                            type="password"
                                            id="password"
                                            placeholder='Password'
                                            autoComplete="current-password"
                                            autoFocus
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className='btn btn-success' type="submit">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Admin