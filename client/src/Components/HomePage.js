import React from 'react'
import { Header } from 'semantic-ui-react'
// import regency from './images/regency.png';

function HomePage() {
    return (

        <section className="container-fluid px-0">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className='text-black text-center d-none d-lg-block'>
                        <h2>CH Regency Organic Cleaners</h2>
                        <h2>CH Regency Organic Cleaners</h2>
                        <h2>CH Regency Organic Cleaners</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid' src="https://www.antons.com/wp-content/uploads/2019/09/anton-services-bg.jpg" alt="regency" />
                </div>
            </div>
        </section>
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