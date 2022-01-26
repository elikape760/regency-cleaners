import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {




    return (
        <>
            <footer id="footercontainer" >
                <footer className="footer mb-5">
                    <p>
                        <h6>Regency Organic Cleaners:</h6>
                        <br /> Phone: (718) 774-2211 <br /> Email: info@mysite.com  <br /> Address: 381 Kingston Ave, Brooklyn, NY 11213 <br /> <br />
                        Operating Hours: <br /> Mon - Fri: 8am - 7pm Sunday: 10am - 5pm
                    </p>
                </footer>
                <footer>
                    <div className="social-container">
                        <a href="https://www.facebook.com/search/top?q=regency%20cleaners"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/regency_organic_cleaners/"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <br /> 
                        <span >&copy;Regency Dry Cleaners</span>
                    </div>
                </footer>
            </footer>
        </>
    )
}



export default Footer
    // <div id="footercontainer">
    //     <hr />
    //     <br />
    //     <footer className="footer bg-dark">
    //         <p>Regency Organic Cleaners - (718) 774-2211  - Address: 381 Kingston Ave, Brooklyn, NY 11213 Email: info@mysite.com</p>
    //     </footer>
    //     <footer className="footer">
    //         <p>Operating Hours: Mon - Fri: 8am - 8pm Sunday: 9am - 8pm</p>
    //     </footer>

    //     <div class="social-container">
    //         <a href="https://www.facebook.com/search/top?q=regency%20cleaners"
    //             className="facebook social">
    //             <FontAwesomeIcon icon={faFacebook} size="2x" />
    //         </a>
    //         <a href="https://www.instagram.com/regency_organic_cleaners/"
    //             className="instagram social">
    //             <FontAwesomeIcon icon={faInstagram} size="2x" />
    //         </a>
    //     </div>
    //     <div id="whitespace"></div>
    // </div>