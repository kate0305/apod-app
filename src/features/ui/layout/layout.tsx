import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';

import classes from './layout.module.css';

export const Layout = () => (
  <div className={classes.wrapper}>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
