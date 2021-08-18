import React from 'react'

import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
const DatePick = () => {
// initialize the value, min and max
const dateValue: Date = new Date("02/08/2021 12:00 PM");
const minDate: Date = new Date("02/08/2021 12:00 PM");
const maxDate: Date = new Date("11/11/2021 5:00 PM");
    return (
        <div>
            <DateTimePickerComponent placeholder="Choose a date and time" 
            value={dateValue} 
            min={minDate}
            max={maxDate}
            format="dd-MMM-yy HH:mm"
            step={60}
            ></DateTimePickerComponent>
        </div>
    )
}

export default DatePick
