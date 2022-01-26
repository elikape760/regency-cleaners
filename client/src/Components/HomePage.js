import React from 'react'
// import { Header } from 'semantic-ui-react'
// import regency from './images/regency.jpg';

function HomePage() {

//    $(function () {
//        $(document).scroll(function() {
//            var $nav = $("#mainNavbar");
//            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//        })
//    })

    return (

        <>

            <section className="container-fluid px-0 content">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id='headingGroup' className='text-black text-center d-none d-lg-block mt-5'>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Cleaners</h1>
                            <h3>We Make Dirty Things Clean. It's Our Thing!</h3>
                            {/* <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Cleaners</h1> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="regency" />
                    </div>
                </div>
            </section>





            <section className='container-fluid px-0'>
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active img-fluid">
                                    <img src="https://richfreddrycleaners.com/wp-content/uploads/2017/12/ebf2c6e7.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item img-fluid">
                                    <img src="https://images.unsplash.com/photo-1451933335233-c41672c8f378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item img-fluid">
                                    <img src="https://richfreddrycleaners.com/wp-content/uploads/2017/12/ebf2c6e7.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 shirt mb-5 mb-md-0">
                                <h2>CH REGENCY CLEANERS</h2>
                                <p className='d-none d-lg-inline'>👔</p>
                                <p className="lead">Here at CH Regency Organic Cleaners we are dedicated to provide a service to our customers with quality, convenience and reliability. We offer door to door service for pick ups and drop offs so you don’t have to lift a finger. We tailor to all your clothe’s needs (offer an array of cleaning services including)- dry cleaning, alterations, pressing__, ___ and …. Our environment is important to us too, so we take the extra step to use eco friendly materials and cleaning methods to keep chemicals away from you and your surroundings. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-2">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active img-fluid">
                                    <img src="https://richfreddrycleaners.com/wp-content/uploads/2017/12/ebf2c6e7.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item img-fluid">
                                    <img src="https://images.unsplash.com/photo-1451933335233-c41672c8f378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item img-fluid">
                                    <img src="https://richfreddrycleaners.com/wp-content/uploads/2017/12/ebf2c6e7.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 shirt mb-5 mb-md-0">
                                <h2>CH REGENCY CLEANERS</h2>
                                <p className='d-none d-lg-inline'>👔</p>
                                <p className="lead">We have become an essential part of the community, creating friendly relationships with its members, giving them the top notch care that they deserve. Be a part of our community and give your clothes the attention that they need. Your clothes will thank you. Always remember that your satisfaction is our number one priority!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default HomePage