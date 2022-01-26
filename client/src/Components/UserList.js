import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import UserPage from './UserPage';

function UserList({ handleDeleteUser }) {

    const [users, setUsers] = useState([])
    const [clickedUser, setclickedUser] = useState(false)


    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(users => {
                setUsers(users)
                // console.log(users);
            })
    }, [])

    function handleDeleteClick(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/users/${users.id}`, {
            method: "DELETE",
            body: JSON.stringify({ user_id: users.id })


        })
            .then((r => r.json()))
            .then(data => handleDeleteUser(data));

        handleDeleteUser(users.id);
    }


    function goBack() {
        setclickedUser(false)
    }

    return (
        <div className="row">
            <>
                {!clickedUser ? users.map((user) => {
                    return (
                        <UserCard setclickedUser={setclickedUser} key={user.id} user={user} setUsers={setUsers} />
                    )
                })
                    :
                    [clickedUser].map((user) => {
                        return (
                            <UserPage goBack={goBack} setclickedUser={setclickedUser} key={user.id} user={user} setUsers={setUsers} handleDeleteClick={handleDeleteClick} />
                        )
                    })}
            </>
        </div>
    );
}

export default UserList