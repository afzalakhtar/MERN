import React from 'react'

export default function InnerpageHero({ ...props }) {
    return (
        <div id='innerpage-hero'>
            <img src={props.src} alt={props.name} className='w-full' />
            <h1>{props.heading}</h1>
        </div>
    )
}
