import {EDIT_DATE_FILTER} from "../constants";

const defaultFilters = {
    dateRange: {
        from: null,
        to: null
    },
    selected: []
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action

    switch (type){
        case EDIT_DATE_FILTER:
            // return Object.assign({}, filters, {dateRange: payload.dateFilter})
            return {...filters, dateRange: payload.dateFilter}
    }

    return filters
}