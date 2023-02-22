import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='headerWrapper' >
            <Link to='/' className='router-link'>Home</Link>
            <Link to='/movies' className='router-link'>Movies</Link>
            <Link to='/movies/add' className='router-link'>Add Movie</Link>
            <Link to='/about' className='router-link'>About</Link>
        </div>
    );
};

export default Header;