import React from 'react';
import UserPage from './UserPage';
// import { useEffect } from 'react'

function UserCard({ viewUser, setViewUser, handleDeletEevent }) {



    function handleDeleteUser(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/users/${viewUser.id}`, {
            method: "DELETE",
            body: JSON.stringify({ user_id: viewUser.id })


        })
            .then((r => r.json()))
            .then(data => handleDeletEevent(data));

        handleDeletEevent(viewUser.id);
    }

    return (
        <div className="card-body text-center">
            <h3 className="card-title ">{viewUser.first_name} {viewUser.last_name}</h3>
            <p className="card-text lead">{viewUser.phone_number}</p>
            <p className="card-text lead">{viewUser.email}</p>
            <p className="card-text lead">{viewUser.street}</p>
            <p className="card-text lead">{viewUser.city}</p>
            <p className="card-text lead">{viewUser.state}</p>
            <p className="card-text lead">{viewUser.zip}</p>
            <button type="button" className='btn btn-danger' onClick={handleDeleteUser} >Delete Account</button>
            <button type="button" className='btn btn-info' onClick={handleDeleteUser} >See User</button>
            <hr />

            <UserPage setViewUser={setViewUser} viewUser={viewUser} />
        </div>
    );
}

export default UserCard