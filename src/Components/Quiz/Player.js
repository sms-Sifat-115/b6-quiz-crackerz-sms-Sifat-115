import React from 'react';

const Player = () => {
    return (
        <div className='container d-flex align-items-center my-5'>
            <img className='img-fluid rounded-4' src="https://pm1.narvii.com/6131/1b77450d9aa0d751f8fe73524a036dab811f770e_hq.jpg" alt="" height={50} width= {50}/>
           <div className='text-start text-danger px-4'>
                <h5>Player: Ethan Hunt</h5>
                <p>Score: </p>
           </div>
        </div>
    );
};

export default Player;