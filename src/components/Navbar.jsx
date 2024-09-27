import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-pink-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='watches'>Watches</Link></li>
                            <li><Link to='jewelry'>Jewelry</Link></li>
                            <li><Link to='rings'>Rings</Link></li>
                            <li><Link to='about'>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Ahmed Brother's</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">
                       <Link to='contact'> Contact</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
