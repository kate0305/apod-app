import { useEffect } from 'react';
import {
  nasaApi,
  useLazyGetPhotoOfSelectedDayQuery,
  useLazyGetPhotosOfSelectedPeriodQuery,
} from '../../services/nasa-service';
import { PhotoOfDay } from '../../features/ui/photo-of-day';
import { ListOfPhotos } from '../../features/ui/list-of-photos';
import { clearPhotosData, setPhotosData } from '../../store/redusers/photos-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Loader } from '../../features/ui/loader';
import { ErrorBlock } from '../../features/ui/error';
import { PageTitle } from '../../features/ui/page-title';

import classes from './calendar-page.module.css';
import { SelectionDate } from '../../features/ui/selection-date/selection-date';

export const CalendarPage = () => {
  const dispatch = useAppDispatch();
  const photosDataFromState = useAppSelector((state) => state.photosReduser.photosData);
  const { startDate: selectedStartDate, endDate: selectedEndDate } = useAppSelector(
    (state) => state.photosReduser.dates
  );

  const [triggerPhoto, { data: photoData, isLoading: loadingPhoto, isError: errPhoto }] =
    useLazyGetPhotoOfSelectedDayQuery();
  const [
    triggerPhotos,
    { data: photosData, isLoading: loadingPhotos, isError: errPhotos, isSuccess },
  ] = useLazyGetPhotosOfSelectedPeriodQuery();

  const startFetching = () => {
    if (selectedStartDate && !selectedEndDate) {
      triggerPhoto(selectedStartDate);
    }
    if (selectedStartDate && selectedEndDate) {
      triggerPhotos({ startDate: selectedStartDate, endDate: selectedEndDate });
    }
  };

  const getPhotos = () => {
    dispatch(nasaApi.util.resetApiState());
    dispatch(clearPhotosData());
    startFetching();
  };

  useEffect(() => {
    if (isSuccess && photosData) {
      dispatch(setPhotosData(photosData));
    }
  }, [dispatch, isSuccess, photosData]);

  if (loadingPhoto || loadingPhotos) return <Loader />;
  if (errPhoto || errPhotos) return <ErrorBlock subtitle="Something went wrong." />;

  return (
    <main className={classes.wrapper}>
      <div>
        <PageTitle title="Select any day or period and look at the photo" />
      </div>
      <SelectionDate getPhotos={getPhotos}/>
      {photoData && <PhotoOfDay {...photoData} />}
      {(photosData || photosDataFromState) && (
        <ListOfPhotos photosData={photosData || photosDataFromState} />
      )}
    </main>
  );
};
