import { NavLink } from 'react-router-dom';
import profileIcon from 'assets/images/profile-icon.svg';
import { useState } from 'react';
import routes from 'utils/routes';
import './index.scss';

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleLinkState = ({ isActive }) =>
    isActive ? 'menu__link menu__link_active' : 'menu__link';

  const toggleProfileLinkState = ({ isActive }) =>
    isActive
      ? 'menu__profile-link menu__profile-link_active'
      : 'menu__profile-link';

  return (
    <div className='menu'>
      <span
        alt=''
        className={
          isMenuActive ? 'menu__burger menu__burger_active' : 'menu__burger'
        }
        onClick={() => setIsMenuActive(!isMenuActive)}
      />
      <div className='menu__nav-wrapper'>
        <nav className='menu__nav'>
          <NavLink to={routes.promo} className={toggleLinkState} data-title='Главная'>
            Главная
          </NavLink>
          <NavLink to={routes.movies} className={toggleLinkState} data-title='Фильмы'>
            Фильмы
          </NavLink>
          <NavLink
            to={routes.savedMovies}
            className={toggleLinkState}
            data-title='Сохранённые фильмы'
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink
            to={routes.profile}
            className={toggleProfileLinkState}
          >
            Аккаунт
            <img src={profileIcon} alt='' className='menu__profile-icon' />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
