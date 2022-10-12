import React from 'react';

const Card = ({quiz}) => {
    const {name, logo, id, total} = quiz;
    return (
        <div className=''>
            <div className="">
                <div className="col-12">
                    <div className="card border-danger bg-danger bg-opacity-75">
                    <img src= {logo} className="img-fluid card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-light">{name}</h5>
                        <p className='text-light'>Total: {total}</p>
                        <button type="button" class="btn btn-outline-light" onClick={() => {}}><h5>Start!</h5></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;