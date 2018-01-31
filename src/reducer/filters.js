import {EDIT_FILTER} from "../constants";

export default (filter = {to: undefined, from: undefined}, action) => {
    const {type, payload} = action

    switch (type){
        case EDIT_FILTER: return (payload)
    }

    return filter
}