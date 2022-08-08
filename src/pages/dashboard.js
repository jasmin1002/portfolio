import React from 'react'
import {FaNapster, FaUser} from 'react-icons/fa'
import {RiHomeHeartFill, RiLineChartLine, RiSettings4Fill} from 'react-icons/ri'
import {MdStorage, MdNotificationImportant} from 'react-icons/md'
import {WiDaySunny} from 'react-icons/wi'
import {NavLink} from 'react-router-dom'
import '../Dashboard.css'

export default function Dashboard() {
    return (
        <section className='dashboard'>
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
                                <RiLineChartLine className='icon-chart' />
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
            <section className='content'>
                <h1>Content Section</h1>
            </section>
        </section>
    )
}