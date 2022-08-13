import React from 'react'
import {MdMoreHoriz} from 'react-icons/md'

import user from '../img/user.jpg'

export const Account = () => (
    <section className='account-info'>
        <div className='account-top'>
            <h4 className='secondary-heading'>
                Account
            </h4>
            <a href='.' className='account-moreinfo'>
                <MdMoreHoriz className='icon-horizdot'/>
            </a>
        </div>
        <div className='account-body'>
            <div className='account-profile'>
                <figure className='account-avatar'>
                    <img src={user} alt='Jasmine' className='account-photo'/>
                </figure>
                <div className='account-description'>
                    <p className='account-username'>
                        @jasminefiles
                    </p>
                    <span className='account-username-id'>
                        0we60F_AE40
                    </span>
                </div>
            </div>
            <ul className='online-presence'>
                <li className='online-stat'>
                    <span className='online-stat-figure'>
                        367
                    </span>
                    <span className='online-activity'>
                        Posts
                    </span>
                </li>
                <li className='online-stat'>
                    <span className='online-stat-figure'>
                        246,772
                    </span>
                    <span className='online-activity'>
                        Followers
                    </span>
                </li>
                <li className='online-stat'>
                    <span className='online-stat-figure'>
                        2,782
                    </span>
                    <span className='online-activity'>
                        Following
                    </span>
                </li>
            </ul>
        </div>
    </section>
)