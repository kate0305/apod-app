import classes from './page-title.module.css';

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => <h1 className={classes.title}>{title}</h1>;
