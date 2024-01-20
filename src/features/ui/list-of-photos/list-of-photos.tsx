import { Link } from 'react-router-dom';
import { PhotoResp } from '../../../services/types';
import classes from './list-of-photos.module.css';

type ListOfPhotosProps = {
  photosData: PhotoResp[];
};

export const ListOfPhotos = ({ photosData }: ListOfPhotosProps) => (
  <div className={classes.container} data-testid="cardList">
    {photosData.map(({ date, copyright, url }) => (
      <Link
        to={`${date}`}
        className={classes.container__item}
        key={date}
        // id={id}
      >
        <img src={url} alt="photo" className={classes.img} data-testid="cardListImg" />
        <div className={classes.wrapper}>
          <p className={classes.name}>{copyright}</p>
          <p className={classes.view}>{date}</p>
          {/* <p className={classes.view}>{(views = `${Math.round(+views / 1000).toFixed(1)}K`)}</p> */}
          <div className={classes.hover}>
            <button className={classes.btn}>More</button>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
