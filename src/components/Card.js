import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-top'>
                <h4 className='card-heading'>
                    <span style={{backgroundColor: props.color}}className='icon-box'>
                        {props.icon}
                    </span>
                    <span className='card-title'>{props.title}</span>
                </h4>
                <span style={{backgroundColor: props.sbgc, color:props.sfc}}className='stat-number'>
                    {props.sIcon}
                    <small className='stat-percent'>21.4%</small>
                </span>
            </div>
                <p className='count'>
                    248,501
                </p>
                <p className='time-period'>
                    From last <span className='time-start'>7</span> days.
                </p>
        </div>
    )
}