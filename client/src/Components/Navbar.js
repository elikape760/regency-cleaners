import { Link } from "react-router-dom"
// import { Button } from 'semantic-ui-react'
// import earth from "./images/world.jpg"

function Navbar({ user, admin, setAdmin, setUser, countCartItems }) {

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null);
                    setAdmin(null);
                }
            });
    }

    return (
        <>
            <nav id="mainNavbar" className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Regency Cleaners</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks"
                        aria-controls="Toggle navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navLinks"> {
                        user ? (
                            <>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home/pickup">Pickup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home/pickup/cart">
                                            Cart {' '}
                                            {countCartItems ? (
                                                <button className="badge">{countCartItems}</button>
                                            ) : (
                                                ''
                                            )}
                                        </Link>{''}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home/pickup/contact">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login" onClick={handleLogoutClick}>Logout</Link>
                                    </li>
                                </ul>
                            </>
                        ) : admin ? (
                            <ul>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" onClick={handleLogoutClick}>Logout</Link>
                                </li>
                            </ul>
                        ) : (
                            <>
                                <div className="collapse navbar-collapse" id="navLinks">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home/pickup">Pickup</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home/pickup/cart">
                                                Cart {' '}
                                                {countCartItems ? (
                                                    <button className="badge">{countCartItems}</button>
                                                ) : (
                                                    ''
                                                )}
                                            </Link>{''}
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home/pickup/contact">Contact Us</Link>
                                        </li>

                                        <nav className=" nav nav-masthead justify-content-center float-md-right">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/signup">Signup</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                        </nav>
                                    </ul>
                                </div>
                            </>
                        )

                    } </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
