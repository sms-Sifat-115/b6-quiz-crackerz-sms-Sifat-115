import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="container navbar bg-light fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand text-danger" to = '/'><span class="material-symbols-outlined">tips_and_updates</span><b><i>Brain StormZ</i></b></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-danger" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 m-3">
                        <li class="nav-item">
                            <Link class="btn btn-outline-danger m-2" aria-current="page" to = '/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="btn btn-outline-success m-2" to = '/quiz'>Quiz</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="btn btn-outline-danger m-2" to = '/stats'>Statistics</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="btn btn-outline-danger m-2" to = '/blogs'>Blogs</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;