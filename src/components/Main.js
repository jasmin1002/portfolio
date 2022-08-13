import React from 'react'
import Card from './Card'
import Graph from './Graph'

import {MdMoreHoriz} from 'react-icons/md'
import {FcLike, FcConferenceCall,} from 'react-icons/fc'
import {FaCaretUp, FaCaretDown, FaRegBell} from 'react-icons/fa'
import {MdFollowTheSigns} from 'react-icons/md'

import user from '../img/user.jpg'

export default function Main() {
    return (
        <section className='content-page row-grid'>
            <main className='content-main'>
                <section className='cards row-grid mb-2'>
                    <Card 
                        icon={<FcConferenceCall className='icon-followers'/>}
                        sIcon={<FaCaretUp className='icon-clue' />}
                        color='hsl(55, 137%, 86%)'
                        title='Followers'
                        sbgc='rgba(179, 255, 204, 0.54)'
                        sfc='rgb(0, 231, 22)'
                    />
                    <Card 
                        icon={<FcLike className='icon-likes'/>}
                        sIcon={<FaCaretDown className='icon-clue' />}
                        color='hsl(345, 97%, 86%)'
                        title='Likes'
                        sbgc='rgb(254, 185, 202)'
                        sfc='red'
                    />
                    <Card 
                        icon={<MdFollowTheSigns className='icon-reach'/>}
                        sIcon={<FaCaretUp className='icon-clue' />}
                        color='hsl(207, 51%, 95%)'
                        title='Reach'
                        sbgc='rgba(179, 255, 204, 0.54)'
                        sfc='rgb(0, 231, 22)'
                    />
                </section>
                <section className='row-grid'>
                    <Graph />
                </section>
            </main>
            <aside className='content-aside'>
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
                <section className='ads'>
                    &nbsp;
                </section>
            </aside>
        </section>
    )
}