import React from 'react';
import { Link } from 'react-router-dom';
import banner from './banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='banner container'>
            <div class="text-danger" id="banner">
                <h6 className='my-3'><span className='d-none d-xl-inline'>Start your programming quest with <b>BrainStormZ</b>,</span> Check your knowledge know! get to the quiz section or click the button below...</h6>
                <Link className="btn btn-success btn-large p-xl-3 mb-4" to = '/quiz'>Start Quiz Now!!</Link>
            </div>
        </div>
    );
};

export default Home;