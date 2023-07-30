import React, { Component } from 'react';
import img1 from './movie-searcher-low-resolution-logo-black-on-transparent-background.png'
import img2 from './movie-rizz-low-resolution-logo-color-on-transparent-background.png';
class Header extends Component {
    render() {
        return (
            <div className='w-full flex justify-between p-4'>
                <img src={img1} alt="logo" className='w-[65px] rounded-full'/>
                <img src={img2} alt="movie riz.." className='w-[300px] h-150 '/>
                <img alt=''/>
            </div>
        );
    }
}

export default Header;
