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
                        <li><a href="/todo">TodoList</a></li>
                        <li><a href="/">Contact</a></li>
                        <li class="services"><a href="/">Hello User1234</a>
                        <ul class="dropdown">
                            <li><a href="/login">Logout</a></li>
                        </ul>
                    </li>
                    </div>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar