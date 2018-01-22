import React, {Component} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'

export default class DayPicker extends Component{
    render(){
        return(
            <DayPickerInput onDayChange={day => console.log(day)} />
        )
    }
}