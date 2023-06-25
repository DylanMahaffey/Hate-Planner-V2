import React from 'react';
import { Weekday, Date } from '../../Types';
import { monthDates } from '../../Configs/MonthDays';
import { Weekdays } from '../../Configs/Weekdays';

interface CalendarProps {}

export const Calendar: React.FC<{}> = ({}) =>  {

    const generateDates = (date: number) => {
        for (let i = 0; i < 7; i++){
            return <button className="date" value={date}><p>{date}</p></button>
        }
    }

    const generateWeeks = (dates: Array<Date>) => {
        let daysInWeek = 7;
        let tempArray = [];

        for (let i=0; i < dates.length; i+= daysInWeek){
            tempArray.push(dates.slice(i, i+daysInWeek));
        }

        return tempArray;
    }
    return (
        <div className="calendar-container">
            <div className="datepicker-container">
                <button className="chevron-left"></button>
                <span>July</span> {/* Temporary */}
                <button className="chevron-right"></button>
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