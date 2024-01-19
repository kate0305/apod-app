import { NavLink } from 'react-router-dom';

import classes from './header.module.css';

export const Header = () => (
  <header className={classes.header}>
    <nav className={classes.wrapper}>
      <ul className={classes.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.logo}` : classes.logo
            }
          />
        </li>
        <li>
          <NavLink
            to="/today"
            className={({ isActive }) => (isActive ? classes.active : classes.link)}
          >
            today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendar"
            className={({ isActive }) => (isActive ? classes.active : classes.link)}
          >
            calendar
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
