import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container navbar bg-light fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand text-danger" to = '/'><span className="material-symbols-outlined">tips_and_updates</span><b><i>Brain StormZ</i></b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-danger" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 m-3">
                        <li className="nav-item">
                            <Link className="btn btn-outline-danger m-2" aria-current="page" to = '/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-success m-2" to = '/quiz'>Quiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-danger m-2" to = '/stats'>Statistics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-danger m-2" to = '/blogs'>Blogs</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;