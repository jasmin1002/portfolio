import React from 'react'
import {Link} from 'react-router-dom'
import {MdMoreHoriz} from 'react-icons/md'
import {CgSearch} from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'
import user from '../img/user.jpg'

export default function Header() {
    return (
        <header className='content-header'>
            <div className='row'>
                <form className='form-search'>
                    <div className='hgroup'>
                        <input 
                            type='text'
                            id='search-text'
                            placeholder='Search for profiles, traffic, etc.'
                        />
                        <label htmlFor='search-text'>
                            <CgSearch className='icon-search'/>
                        </label>
                    </div>
                </form>
                <div className='user'>
                    <ul className='user-contact'>
                        <li className='user-chat'>
                            <Link to={'.'}>
                                <MdMoreHoriz className='icon-chat-notification'/>
                            </Link>
                        </li>
                        <li className='user-email-notification'>
                            <Link to={'.'}>
                                <IoIosArrowDown className='icon-unreadmail' />
                            </Link>
                        </li>
                    </ul>
                    <div className='user-profile'>
                        <figure className='user-avatar'>
                            <img src={`${user}`} alt='user-avatar' className='user-photo' />
                        </figure>
                        <div className='user-description'>
                            <h1 className='user-name'>{'Olalekan Files'}</h1>
                            <p className='user-email'>{'jimohsikiru20@gmail.com'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}