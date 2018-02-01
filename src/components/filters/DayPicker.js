import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {editDateFilter} from '../../AC/index'
import {connect} from "react-redux";

class Picker extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleDayClick(day) {
        const {dateRange, editDateFilter} = this.props
        editDateFilter(DateUtils.addDayToRange(day, dateRange))
    }

    handleResetClick() {
        this.props.editDateFilter({dateFilter:{
                from: null,
                to: null
            }})
    }

    render() {
        const { dateRange: {from, to} } = this.props;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from && to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from && to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default connect( (store)=>({
    dateRange: store.filters.dateRange
}), {editDateFilter})(Picker)