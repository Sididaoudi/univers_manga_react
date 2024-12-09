import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav">
      {/* Menu classique pour les écrans larges */}
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li className="dropdown">
          <a href="#">Mangas</a>
          <ul className="dropdown-content">
            <li><Link to="/AllManga">Tous les mangas</Link></li>
            <li><Link to="/Release">Planning des sorties</Link></li>
          </ul>
        </li>
        <Search />
      </ul>

      {/* Menu burger pour les petits écrans */}
      <div className="navbar-smallscreen md:hidden">
        <GiHamburgerMenu
          color="#fff"
          fontSize={30}
          onClick={() => setToggleMenu(!toggleMenu)} // Basculer l'état pour ouvrir/fermer
        />
        {/* Menu en overlay qui s'affiche lorsque toggleMenu est vrai */}
        {toggleMenu && (
          <div className={`navbar-smallscreen_overlay ${toggleMenu ? 'show' : ''}`}>
            <GiHamburgerMenu
              color="#fff"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)} // Fermer le menu au clic
            />
            <ul className="navbar-smallscreen_links">
              <li><Link to="/" className="text-white text-xl">Accueil</Link></li>
              <li className="dropdown">
                <a href="#" className="text-white text-xl">Mangas</a>
                <ul className="dropdown-content">
                  <li><Link to="/AllManga" className="text-white">Tous les mangas</Link></li>
                  <li><Link to="/Release" className="text-white">Planning des sorties</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
