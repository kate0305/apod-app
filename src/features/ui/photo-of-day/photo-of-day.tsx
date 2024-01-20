import { PhotoResp } from '../../../services/types';
import { PageTitle } from '../page-title';
import classes from './photo-of-day.module.css';

export const PhotoOfDay = ({ copyright, date, explanation, hdurl, title, url }: PhotoResp) => (
  <section className={classes.wrapper}>
    <div>
      <PageTitle title="Photo of the day" />
      <p className={classes.date}>{date}</p>
    </div>
    <div className={classes.container}>
      <div className={classes.photo}>
        <a href={hdurl} className={classes.img_hd} target="_blank" rel="noopener noreferrer">
          <img className={classes.img} src={url} alt="photo" loading="lazy" />
        </a>
        {copyright && <p className={classes.autor}>{copyright}</p>}
      </div>
      <div className={classes.description}>
        <h2 className={classes.subtitle}>{title}</h2>
        <p className={classes.description}>{explanation}</p>
      </div>
    </div>
  </section>
);
