import { Loader } from '../../features/ui/loader';
import { ErrorBlock } from '../../features/ui/error';
import { useGetTodayPhotoQuery } from '../../services/nasa-service';
import { PhotoOfDay } from '../../features/ui/photo-of-day';
import classes from './today-page.module.css';

export const TodayPage = () => {
  const { data: photoData, error, isLoading } = useGetTodayPhotoQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorBlock subtitle="Something went wrong." />;
  if (!photoData) return <ErrorBlock subtitle="Something went wrong." />;

  return (
    <main className={classes.wrapper}>
      <PhotoOfDay {...photoData} />
    </main>
  );
};
