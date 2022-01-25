import { useEffect, useState } from 'react';
import UserCard from './UserCard';

function UserList({ handleDeleteUser }) {

    const [viewUser, setViewUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(viewUser => {
                setViewUser(viewUser)
                // console.log(viewUser);
            })
    }, [])

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm-8 col-md-8 col-xl-5 offset-3" >
                    <h2 className='align-items-left'>Users</h2>
                    <div className="card">
                        <>
                            {viewUser.map((viewUser) => {
                                return (
                                    <UserCard key={viewUser.id} viewUser={viewUser} setViewUser={setViewUser} handleDeleteUser={handleDeleteUser} />
                                )
                            })}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList