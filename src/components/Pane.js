import React from 'react'
import { NavLink} from 'react-router-dom'
import {FaNapster, FaUser, } from 'react-icons/fa'
import {RiHomeHeartFill, RiSettings4Fill} from 'react-icons/ri'
import {CgTrending} from 'react-icons/cg'
import {MdStorage, MdNotificationImportant} from 'react-icons/md'
import {WiDaySunny} from 'react-icons/wi'

export default function Pane() {
    return (
        <>
            <section className='pane'>
                <header className='pane-header'>
                    <FaNapster className='icon-fanapster'/>
                </header>
                <nav className='navigation'>
                    <ul className='navigation-items'>
                        <li className='navigation-item'>
                            <NavLink to='../login' className='navigation-link'>
                                <RiHomeHeartFill />
                            </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink to='../login' className='navigation-link'>
                                <CgTrending className='icon-trending' />
                            </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink to='../login' className='navigation-link'>
                                <MdNotificationImportant className='icon-account' />
                            </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink to='../login' className='navigation-link'>
                                <MdStorage className='icon-storage' />
                            </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink to='../login' className='navigation-link'>
                                <RiSettings4Fill className='icon-setting' />
                            </NavLink>
                        </li>
                    </ul>
                    <aside className='aside'>
                        <ul className='navigation-items'>
                            <li className='navigation-item'>
                                <NavLink to='../login' className='navigation-link'>
                                    <WiDaySunny className='icon-weather' />
                                </NavLink>
                            </li>
                            <li className='navigation-item'>
                                <NavLink to='../login' className='navigation-link'>
                                    <FaUser className='icon-user' />
                                </NavLink>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </section>
        </>
    )
}