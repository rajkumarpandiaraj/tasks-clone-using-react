import React from 'react';
import '../assests/nav.css';
import logo from '../assests/logo.png'

function Nav() {
    return (
        <div className='nav'>
        <div className='nav-container'>
            <div className='brand'>
                <div className='menu-icon'>
                    <i className=' fas fa-bars'></i>
                </div>
                <img src={logo} alt='logo'/>
                <p className='brand-name'>Keep</p>
            </div>
            <form className='search'>
                <i className='fas fa-search'></i>
                <input type='text' className='search-input' name='search' placeholder='Search'/>
                <i className='fas fa-times'></i>
            </form>
            <div className='widgets'>
                <i className='fas fa-cloud-upload-alt'  aria-hidden="true"></i>
                <i className='fas fa-grip-horizontal'></i>
                <i className='fas fa-cog'></i>
            </div>
            <div className='mail-box'>
                <span className='mail'>r</span>
            </div>
        </div>
    </div>
    )
}

export default Nav
