import {React, useState} from 'react'
import '../Login.css'

export default function Login() {
    const [user, setUser] = useState({
        username: '',
        email: ''
    })

    function handleChange(e) {
        const {name, value} = e.target
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(user)
    }

    return (
        <section className='login'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='login-heading'>Login</h1>
                <div className='form-vgroup'>
                    <label htmlFor='username'>Username</label>
                    <input type='text'
                        className='input'
                        id='username'
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                        // placeholder='username'
                    />
                </div>
                <div className='form-vgroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                        className='input'
                        id='email'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                        // placeholder='email'
                    />
                </div>
                <div className='form-vgroup'>
                    <button>Login</button>
                </div>
            </form>
        </section>
    )
}