import { INCREMENT, DELETE_ARTICLE, EDIT_DATE_FILTER, EDIT_SELECT_FILTER, ADD_COMMENT} from "../constants";

export function increment(){
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function editDateFilter(dateFilter){
    return {
        type: EDIT_DATE_FILTER,
        payload: { dateFilter }
    }
}

export function editSelectFilter(selected){
    return {
        type: EDIT_SELECT_FILTER,
        payload: { selected }
    }
}

export function addComment(idArticle, user, text){
    return {
        type: ADD_COMMENT,
        payload: { idArticle, user, text }
    }
}