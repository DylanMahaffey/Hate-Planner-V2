import React from 'react';
import { Weekday, DateDay } from '../../Types';
import { monthDates } from '../../Configs/MonthDays';
import { MonthNames } from '../../Configs/Months';
import { Weekdays } from '../../Configs/Weekdays';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface CalendarProps {}


export const Calendar: React.FC<{}> = ({}) =>  {

    const generateDates = (dateday: number) => {
        for (let i = 0; i < 7; i++){
            return <button className="date" value={dateday}><span>{dateday}</span></button>
        }
    }

    const generateWeeks = (dates: Array<DateDay>) => {
        let daysInWeek = 7;
        let tempArray = [];

        for (let i=0; i < dates.length; i+= daysInWeek){
            tempArray.push(dates.slice(i, i+daysInWeek));
        }

        return tempArray;
    }

    const currentMonth = () => {
        let today = new Date();
        let currentMonth = today.getMonth();

        return MonthNames[currentMonth];
    }

    return (
        <div className="calendar-container">
            <div className="datepicker-container">
                <button className="chevron-left"><FontAwesomeIcon icon={faChevronLeft} /></button>
                <span>{currentMonth()}</span> {/* Temporary */}
                <button className="chevron-right"><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className="weekdays-container">
                {Weekdays.map(day => (
                    <div className="week-day">{day}</div>
                ))}
            </div>
            <div className="calendar">
                {generateWeeks(monthDates).map(week => (
                    <div className="week">
                        {week.map(day => (generateDates(day.day)))}
                    </div>
                ))}          
            </div>
        </div>
    )
}