import React from 'react';
import { Calendar } from '../Calendar/Calendar';

export const DatePicker: React.FC<{}> = ({}) => {
    return (
        <div className="date-picker-container">
            <div className="background-container"></div>
            <Calendar></Calendar>
        </div>
    )
}

export default DatePicker;