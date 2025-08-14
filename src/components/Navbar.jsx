import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">VillageConnect</h1>
      <button 
        className="md:hidden" 
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <ul className={`md:flex md:space-x-4 ${open ? "block" : "hidden"}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
