import { Link } from "react-router-dom"

// import earth from "./images/world.jpg"

function Navbar({ user, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null);
                }
            });
    }

    return (
        <header className="img-header">
            <h1 className="header-text">Regency Cleaners</h1>
           
            <div className="nav-link">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div >
                    {user ? (
                        <>
                            <Link to="/home/"></Link>
                            <button onClick={handleLogoutClick}>Logout</button>
                        </>

                    ) : (
                        <>
                            {/* <Link to="/signup">Signup</Link> */}
                            {/* <Link to="/login">Login</Link> */}
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;