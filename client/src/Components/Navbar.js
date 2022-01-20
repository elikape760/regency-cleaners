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
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Regency Cleaners</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks"
                        aria-controls="Toggle navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navLinks"> {
                        user ? (
                            <>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
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
                                        <Link className="nav-link" onClick={handleLogoutClick}>Logout</Link>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <div className="collapse navbar-collapse" id="navLinks">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">Signup</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login">Login</Link>
                                        </li>
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
{/* <navbar id='mainNavbar' className='navbar navbar-expand-lg navbar-light bg-light' >
    <a href="#" className="navbar-brand">Regency Cleaners</a>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navLinks"> {
        user ? (
            <>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
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
                        <Link className="nav-link" onClick={handleLogoutClick}>Logout</Link>
                    </li>
                </ul>
            </>
        ) : (
            <>
                <div className="collapse navbar-collapse" id="navLinks">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link> <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    } </div>
</navbar> */}