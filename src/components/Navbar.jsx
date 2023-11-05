import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    
    const navLinks = <>
    <li className='mr-1'><NavLink to="/">Home</NavLink></li>
    <li className='mr-1'> <NavLink to="/login">Login</NavLink></li>
 
    </>

    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src="https://i.ibb.co/NjWKjPc/peninsula-logo-grey.png" className='h-14 w-64 lg:ml-6'  alt="" />
  </div>

  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 lg:mr-6">
      {navLinks}
    </ul>
  </div>
</div>
    );
};

export default Navbar;