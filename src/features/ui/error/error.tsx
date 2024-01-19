import classes from './error.module.css';

type ErrorPageProps = {
  title?: string;
  subtitle: string;
  button?: JSX.Element;
};

export const ErrorBlock = ({ title, subtitle, button }: ErrorPageProps) => (
  <main className={classes.wrapper}>
    <h1 className={classes.title}>{title ? title : 'Oops!'}</h1>
    <h2 className={classes.subtitle}>{subtitle}</h2>
    {button}
  </main>
);
