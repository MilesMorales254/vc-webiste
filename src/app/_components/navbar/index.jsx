'use client'

import Link from 'next/link'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    // Header container with fixed positioning and full width
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Container for the hamburger menu button */}
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Hamburger Menu Button with slightly transparent black background */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-white text-2xl sm:text-3xl md:text-4xl p-2 sm:p-4 bg-black bg-opacity-50 rounded"
        >
          ☰
        </button>
      </div>

      {/* Slide-in Navigation Menu */}
      {menuOpen && (
        <nav className="fixed left-0 top-0 w-1/2 sm:w-1/3 md:w-1/4 h-full bg-black text-white flex flex-col p-6">
          {/* Close Button */}
          <button 
            onClick={() => setMenuOpen(false)} 
            className="text-white text-3xl mb-4 ml-auto"
          >
            &times;
          </button>

          {/* Menu Items */}
          <ul className="text-lg flex-grow">
            <li className="py-4 hover:bg-white hover:text-black transition-colors">
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            {/* Add more menu items here if needed */}
          </ul>
        </nav>
      )}
    </header>
  );
}
