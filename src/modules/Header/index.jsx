import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import './index.scss';
import Menu from './components/Menu/Menu';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='logo' />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
