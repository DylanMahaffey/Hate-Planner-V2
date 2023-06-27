import { DateDay } from '../Types';

function generateDates(): DateDay[] {
    let dates: DateDay[] = [];
    for (let i = 1; i < 29; i++) {
        let date:DateDay = {day: i};
        dates.push(date);
    }
    return dates;
}

export const monthDates: DateDay[] = generateDates();