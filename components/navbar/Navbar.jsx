import Link from 'next/link';
import links from './navLinks';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/" passHref>
            <img src="/imgs/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        {links.map(({ href, label }) => (
          <li className="nav__item">
            <Link href={href} className="nav__link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
