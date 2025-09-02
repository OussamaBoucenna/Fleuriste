import { navLinks } from "../data/NavLinks"; // ou dans le même fichier

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Heart, ShoppingBag } from "lucide-react"; // icons
import Logo from "../assets/logo.svg"; // ton fichier logo.svg

 function NavbarLinks() {
  return (
    <div className="hidden font-semibold md:flex space-x-6  text-myGrey">
      {navLinks.map((item, index) =>
        item.children ? (
          <div key={index} className="relative group">
            <button>{item.name} ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md p-2">
              {item.children.map((sub, i) => (
                <Link
                  key={i}
                  to={sub.path}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link key={index} to={item.path}>
            {item.name}
          </Link>
        )
      )}
    </div>
  );
}


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-greyBg shadow-sm border-2 border-white px-6 py-3 flex items-center justify-between rounded-2xl">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className=" h-12" />
      </div>

      {/* Menu desktop */}
        <NavbarLinks />

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Heart className="w-5 h-5 text-myGrey cursor-pointer" />
        <ShoppingBag className="w-5 h-5 text-myGrey cursor-pointer" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <Menu className="w-6 h-6 text-myGrey" />
        </button>
      </div>

      {/* Menu mobile (slide-down) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-3 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>A propos de nous</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Nos produits</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Evènements</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contacts</Link>
        </div>
      )}
    </nav>
  );
}

