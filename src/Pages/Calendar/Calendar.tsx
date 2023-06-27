import React, { FC } from 'react';
import { DatePicker } from '../../Components/DatePickerComponent/DatePicker';


interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => (
  <div>
    Calendar Component
    <DatePicker></DatePicker>
  </div>
);

export default Calendar;
