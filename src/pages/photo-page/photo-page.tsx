import { PhotoOfDay } from '../../features/ui/photo-of-day';
import classes from './photo-page.module.css';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

export const PhotoPage = () => {
  const photosData = useAppSelector((state) => state.photosReduser.photosData);
  const { photoId } = useParams();
  const location = useLocation();
  console.log('location', location);
  console.log('photoId', photoId)
  const photo = photosData.find(({date}) => date === photoId);

  return <main className={classes.wrapper}>{photo && <PhotoOfDay {...photo} />}</main>;
};
