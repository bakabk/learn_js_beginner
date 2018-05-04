import {
    INCREMENT, DELETE_ARTICLE, EDIT_DATE_FILTER, EDIT_SELECT_FILTER, ADD_COMMENT,
    LOAD_ALL_ARTICLES, LOAD_ARTICLE, SUCCESS, FAIL, START
} from "../constants";

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
        payload: { idArticle, user, text },
        generateId: true
    }
}

export function loadAllArticles(){
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id){
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout( () => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then( response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id, response }
                }))
                .catch(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { id, error }
                }))
        }, 1000)
    }
}