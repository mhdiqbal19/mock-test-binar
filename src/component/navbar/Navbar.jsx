import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <div class="logo">Mock Test Binar</div>
                <ul class="nav-links">
                    <div class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li class="services"><a href="/">Services</a>
                            <ul class="dropdown">
                                <li><a href="/">Dropdown 1 </a></li>
                                <li><a href="/">Dropdown 1 </a></li>
                            </ul>
                        </li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Login</a></li>
                    </div>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar