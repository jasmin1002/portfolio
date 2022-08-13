import React from 'react'
import {Link} from 'react-router-dom'
import lemon from '../img/lemon.jpg'
import host from '../img/files.jpg'

export const Ads = () => (
    <section className='ads event'>
        <header className='ads-top'>
            <h4 className='secondary-heading mb-2'>
                Upcoming Post
            </h4>
            <figure className='ads-banner'>
                <img src={lemon} alt='Lemon' className='ads-photo'/>
            </figure>
            <h4 className='ads-title mt-1'>Lemon Juice</h4>
        </header>
        <div className='ads-body'>
            <p className='event-date mb-2'>
                {`Tuesday, January 28. 11:30 PM`}
            </p>
            <div className='event-host host mb-2'>
                <figure className='host-avatar'>
                    <img src={host} alt='JIMOH Sikiru' className='host-photo'/>
                </figure>
                <p className='host-name'>
                    {`JIMOH Sikiru`}
                </p>
            </div>
            <Link to='.' className='btn btn__fill btn-text_white btn__blue'>
                {`See all Posts`}
            </Link>
        </div>
    </section>
)