function UserCard({ user, setclickedUser, handleDeletEevent }) {

    const getUser = () => {
        setclickedUser(user)
        // console.log(user.id);
    }


    return (

        <div className="col-6 offest-3">
            <div className="card mb-3">
                <div className="card-body">
                    <h1 className="card-title ">{user.first_name} {user.last_name}</h1>
                    <button type="button" className='btn btn-info' onClick={getUser} >See User</button>
                </div>
            </div>
        </div>

    );
}

export default UserCard