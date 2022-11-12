import Link from 'next/link';
import { useState } from 'react';
import links from './navLinks';

const Menu = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <nav className="navbar-menu">
        <ul className="navbar-menu__list" onClick={() => setOpen(false)}>
          <img src="/imgs/logo.png" alt="logo" className="logo" />
          {links.map(({ href, label }) => (
            <Link href={href} className="navbar-menu__link">
              <li className="navbar-menu__item">{label}</li>
            </Link>
          ))}
        </ul>
        <button onClick={() => setOpen(false)} className="navbar-menu__close">
          &times;
        </button>
      </nav>
    );
  }

  return (
    <nav className="menu-nav">
      <ul className="menu-nav__list">
        <li className="menu-nav__item">
          <Link href="/" passHref>
            <img src="/imgs/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        <li className="menu-nav__item">
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
