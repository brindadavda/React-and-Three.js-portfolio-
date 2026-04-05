import { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
        <a href="#" className="text-white text-[18px] font-bold cursor-pointer" onClick={() => setActive('')}>
          Portfolio Clone
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium transition-colors`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
