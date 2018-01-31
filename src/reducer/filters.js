import {EDIT_FILTER} from "../constants";

const defaultFilters = {
    dateRange: {
        from: undefined,
        to: undefined
    },
    selected: []
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action

    console.log('filters', filters)

    switch (type){
        case EDIT_FILTER: return Object.assign({}, filters, {dateRange: payload.dateRange}  )
    }

    return filters
}