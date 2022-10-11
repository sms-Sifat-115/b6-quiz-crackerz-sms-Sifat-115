import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-center w-100 position-absolute top-100 start-50 translate-middle pt-4 mt-5'>
            <Link className="text-decoration-none text-danger" to = '/'><span className="material-symbols-outlined">tips_and_updates</span><b><i><h6>Brain StormZ</h6></i></b></Link>
            <p className='text-secondary'>All copyrights belongs to BrainStormZ.io</p>
            <p className='text-secondary'>|| 2022 || Kentucky, USA</p>
        </div>
    );
};

export default Footer;