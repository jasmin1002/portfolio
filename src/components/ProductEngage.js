import React from 'react'

export const Product = () => (
    <div className='product'>
        <h1>Product</h1>
        <figure className='product-img-frame'>
            <img src={'name'} />
        </figure>
        <div className='product-description'>
            <h3>Scissor and other stuff</h3>
            <p className='product-author'>
                Powered by
            </p>
            <figure className='product-author-avatar'>
                <img src={'product-author'} />
                <figcaption className='product-author-name'>
                    Vika Wendash
                </figcaption>
            </figure>
        </div>
    </div>
)

export const Engagement = () => (
    <div className='engagement'>
        <h1>Engagement</h1>
    </div>
)