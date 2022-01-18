import { Link } from "react-router-dom"
// import { Button } from 'semantic-ui-react'
// import earth from "./images/world.jpg"

function Navbar({ user, setUser, countCartItems }) {

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
        <header className="block row center">
            <div>
                <h1>Regency Cleaners</h1>
                <div>
                    <Link  to="/">Home</Link> <br />
                </div>
                <div>
                    {user ? (
                        <>
                            <Link to="/home/pickup">pickup</Link> <Link to="/home/pickup/cart">
                                Cart {' '}
                                {countCartItems ? (
                                    <button className="badge">{countCartItems}</button>
                                ) : (
                                    ''
                                )}
                            </Link>{''} <Link to="/home/pickup/contact">Contact Us</Link> <Link  onClick={handleLogoutClick}>Logout</Link> 

                        </>

                    ) : (
                        <>
                            <Link  to="/signup">Signup</Link>
                            <br />
                            <Link  to="/login">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;