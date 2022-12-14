import React from 'react'
import Header from './Header'
import Main from './Main'

export default function Content() {
    return (
        <section className='content'>
            <Header />
            <h1 className='heading-primary'>Overview</h1>
            <Main />
        </section>
    )
}