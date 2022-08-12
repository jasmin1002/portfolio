import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'
import {FcLike, FcConferenceCall,} from 'react-icons/fc'
import {FaCaretUp, FaCaretDown, FaRegBell} from 'react-icons/fa'
import {MdFollowTheSigns} from 'react-icons/md'

export default function Main() {
    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        <section className='content-page row-grid'>
            <main className='content-main'>
                <h1 className='heading-primary'>Overview</h1>
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
                    <div className='board'>
                        <div className='board-top'>
                            <h4 className='board-title'>
                                Your Performance
                            </h4>
                            <form className='form options'>
                                <div className='form-group'>
                                    <input className='option'
                                        id='followers'
                                        type='radio'
                                        name='radio-btn'
                                        onChange={handleChange}
                                    />
                                    <span className='radio-btn'></span>
                                    <label htmlFor='followers'>
                                        Followers
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <input className='option'
                                        id='likes'
                                        type='radio'
                                        name='radio-btn'
                                        onChange={handleChange}
                                    />
                                    <span className='radio-btn'></span>
                                    <label htmlFor='likes'>
                                        Likes
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <input className='option'
                                        id='reach'
                                        type='radio'
                                        name='radio-btn'
                                        onChange={handleChange}
                                    />
                                    <span className='radio-btn'></span>
                                    <label htmlFor='reach'>
                                        Reach
                                    </label>
                                </div>
                            </form>
                            <Link to='.' className='btn right-align'>Learn More</Link>
                        </div>
                        <div className='graph'>
                            <h6>Graph Content...</h6>
                        </div>
                    </div>
                </section>
            </main>
            <aside className='content-aside'>
                &nbsp;
            </aside>
        </section>
    )
}