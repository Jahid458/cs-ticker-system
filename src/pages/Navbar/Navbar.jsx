import React from "react";

const Navbar = () => {
  return (
<div className="w-full bg-white shadow-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
    
    <div className="flex items-center">
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-100 p-2 shadow bg-white rounded-box w-52">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      <a className="ml-2 lg:ml-0 text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">
        CS — Ticket System
      </a>
    </div>

    <div className="flex items-center gap-3">
      <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
        <li><a className="hover:text-black transition">Home</a></li>
        <li><a className="hover:text-black transition">FAQ</a></li>
        <li><a className="hover:text-black transition">Changelog</a></li>
        <li><a className="hover:text-black transition">Blog</a></li>
        <li><a className="hover:text-black transition">Download</a></li>
        <li><a className="hover:text-black transition">Contact</a></li>
      </ul>


      <a className="btn bg-[#422AD5] hover:bg-[#6D28D9]  text-white border-none btn-sm lg:btn-md">
        + New Ticket
      </a>
    </div>

  </div>
</div>
  );
};

export default Navbar;