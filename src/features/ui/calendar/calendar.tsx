import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import classes from './calendar-page.module.css';

export type CalendarProps = {
  onChange: (dates: [Date, Date | null]) => void;
  startDate: Date | null;
  endDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
};

export const Calendar = ({ startDate, endDate, minDate, maxDate, onChange }: CalendarProps) => {
  return (
    <DatePicker
      wrapperClassName="datePicker"
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={minDate}
      maxDate={maxDate}
      selectsRange
      inline
    />
  );
};
