import React, {useState, useEffect, createRef} from 'react'
import {Link} from 'react-router-dom'

import {Follower} from './Follower'
import Reach from './Reach'
import Like from './Like'

export default function Graph() {
    const [choice, setChoice] = useState({
        categories: 'followers',
        isChosen: true
    })

    const node = createRef();

    function handleChange(event) {
        setChoice(prevChoice => {
            const {name, value} = event.target;
            return {
                ...prevChoice,
                [name]: value
            }
        })
    }

    // console.log('useRef: ', node);

    useEffect(() => {
        console.log('Initializing...')
    })

    return (
        <section className='board'>
            <div className='board-top'>
                <h4 className='board-title'>
                    Your Performance
                </h4>
                <form className='form options'>
                    <div className='form-group'>
                        <input className='option'
                            id='followers'
                            type='radio'
                            name='categories'
                            value='followers'
                            checked={choice.categories === 'followers'}
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
                            name='categories'
                            value='likes'
                            checked={choice.categories === 'likes'}
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
                            name='categories'
                            value='reach'
                            checked={choice.categories === 'reach'}
                            onChange={handleChange}
                        />
                        <span className='radio-btn'></span>
                        <label htmlFor='reach'>
                            Reach
                        </label>
                    </div>
                </form>
                <Link to='.' className='btn btn__outline right-align'>Learn More</Link>
            </div>
            <div className='graph'>
                { 
                    choice.categories === 'followers' && <Follower ref={node}/>
                }
                { choice.categories === 'reach' && <Reach /> }
                { choice.categories === 'likes' && <Like /> }
            </div>
        </section>
    )
}