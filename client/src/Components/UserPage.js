import { useHistory } from 'react-router-dom'

function UserPage({ user, goBack, handleDeleteClick }) {

    const history = useHistory()

    function goToUpdate(e) {
        e.preventDefault();

        history.push('/admin/edit')
    }
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{user.first_name} {user.last_name}</h2>
                    </div> <hr />
                    <ul className="list-group-flush">
                        <li className="list-group-item">{user.phone_number}</li>
                        <li className="list-group-item">{user.email}</li>
                        <li className="list-group-item">{user.street}</li>
                        <li className="list-group-item">{user.city}</li>
                        <li className="list-group-item">{user.state}</li>
                        <li className="list-group-item">{user.zip}</li>
                    </ul>
                    <div className="card-body">
                        <button type="button" className='btn btn-danger' onClick={handleDeleteClick} >Delete Account</button> 

                        <button type="button" className='btn btn-success' onClick={goToUpdate}>Update Account</button>

                        <button type="button" className='btn btn-info ' onClick={goBack}>Back to Accounts</button>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserPage