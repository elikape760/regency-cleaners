import React from 'react'
// import { Header } from 'semantic-ui-react'
// import regency from './images/regency.jpg';

function HomePage() {
    return (

        <>
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id='headingGroup' className='text-black text-center d-none d-lg-block mt-5'>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Organic<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Organic<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Organic<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Organic<span>/</span>Cleaners</h1>
                            <h1 className='display-2'>CH<span>/</span>Regency<span>/</span>Organic<span>/</span>Cleaners</h1>
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="regency" />
                    </div>
                </div>
            </section>
            <section className='container-fluid px-0'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://richfreddrycleaners.com/wp-content/uploads/2017/12/ebf2c6e7.jpg" alt="iron" />
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </section>
        </>
        //     <div className='home-page' >
        //     <container >
        //         <Header as='h2'>Here at CH Regency Organic Cleaners</Header>
        //         <p id='about-us' >
        //          Customer satisfaction is our number one priority. We offer door to door service for pick ups and drop offs so you don’t have to lift a finger. We tailor to all your needs- dry cleaning, alterations, _, __ and …. Our environment is important to us, too, so we take the extra step to use recyclable materials and cleaning methods to reduce our carbon footprint. Be a part of our community and give your clothes the attention that they need!
        //         </p>
        //     </container>
        // </div >
    )
}

export default HomePage