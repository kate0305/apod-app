import classes from './loader.module.css';

export const Loader = () => (
  <div className={classes.wrapper} data-test-id="loader">
    <div className={classes.preloader} />
  </div>
);
