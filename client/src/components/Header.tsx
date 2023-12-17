import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];
  return (
    <nav className='header'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='nav-links'>
        {navigation.map((item) => {
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
