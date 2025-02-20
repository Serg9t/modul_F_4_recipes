import React from 'react'

const Footer = () => {
    const year = new Date()
    return (
        <footer className='footer'>
            <p className='footer-item'>
            Culinary recipes 
            </p>
            <p className='year'>
                {year.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer