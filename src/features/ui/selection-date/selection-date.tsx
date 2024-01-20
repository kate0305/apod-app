import { useState } from 'react';
import { PrimaryButton } from '../buttons/button';
import { IconButton } from '../buttons/icon-button';
import { Calendar } from '../calendar';
import { useAppDispatch } from '../../../store/hooks';
import { setDates } from '../../../store/redusers/photos-slice';
import classes from './selection-date.module.css';
import { getDateAsString } from '../../../utils/get-date-as-string';

type SelectionDateProps = {
  getPhotos: () => void;
};

export const SelectionDate = ({ getPhotos }: SelectionDateProps) => {
  const dispatch = useAppDispatch();

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (dates: [Date, Date | null]) => {
    const [start, end] = dates;
    const startDate = getDateAsString(start);
    const endDate = getDateAsString(end);
    dispatch(setDates({ startDate, endDate }));
    setSelectedStartDate(start);
    setSelectedEndDate(end);
  };

  const handleClickIconButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickGetButton = () => {
    getPhotos();
    setIsOpen(false);
  };

  return (
    <section className={classes.selection}>
      <div>
        <IconButton onClick={handleClickIconButton} className={classes.icon_btn} />
        {isOpen && (
          <Calendar
            onChange={onChange}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            minDate={new Date('1995-06-16')}
            maxDate={new Date()}
          />
        )}
      </div>
      <PrimaryButton text="Get photos" onClick={handleClickGetButton} className={classes.btn} />
    </section>
  );
};
