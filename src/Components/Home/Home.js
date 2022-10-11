import React from 'react';
import { Link } from 'react-router-dom';
import banner from './banner.jpg'

const Home = () => {
    return (
        <div className=''>
            <img className='container rounded-4 position-absolute top-50 start-50 translate-middle my-5 opacity-75' src={banner} alt=""/>
            
            <div class="position-absolute bottom-0 start-50 translate-middle mb-5 pb-4 text-danger" id="banner">
                <p><span className='d-none d-xl-inline'>Start your programming quest with <b>BrainStormZ</b>,</span> check your knowledge know! get to the quiz section or click the button below...</p>
                <Link className="btn btn-success btn-large p-xl-3 mb-4" to = '/quiz'>Start Quiz Now!!</Link>
            </div>
        </div>
    );
};

export default Home;