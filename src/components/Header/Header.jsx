import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const nav = (
    <div className=" space-x-3">
      <NavLink to="/">
        <li class="btn btn-outline btn-success hover:text-white">Home</li>
      </NavLink>
      <NavLink to="/">
        <li class="btn btn-outline btn-success hover:text-white">
          Listed Books
        </li>
      </NavLink>
      <NavLink to="/">
        <li class="btn btn-outline btn-success hover:text-white">
          Pages to Read
        </li>
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link className="font-bold text-xl">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-success mr-3 text-white">Sign In</button>
        <button className="btn btn-info text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
