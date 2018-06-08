import {
    INCREMENT, DELETE_ARTICLE, EDIT_DATE_FILTER, EDIT_SELECT_FILTER, ADD_COMMENT,
    LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS, SUCCESS,
    LOAD_COMMENTS_FOR_PAGE, START, FAIL
} from "../constants";
import {push, replace} from 'react-router-redux'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function editDateFilter(dateFilter) {
    return {
        type: EDIT_DATE_FILTER,
        payload: {dateFilter}
    }
}

export function editSelectFilter(selected) {
    return {
        type: EDIT_SELECT_FILTER,
        payload: {selected}
    }
}

export function addComment(idArticle, user, text) {
    return {
        type: ADD_COMMENT,
        payload: {idArticle, user, text},
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: {articleId},
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => {
                    if (res.status >= 404) {
                        throw new Error(res.statusText)
                    }
                    return res.json()
                })
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id, response}
                }))
                .catch(error => {
                    dispatch({
                        type: LOAD_ARTICLE + FAIL,
                        payload: {id, error}
                    })
                    dispatch(replace('/error'))
                })
        }, 1)
    }
}

export function checkAndLoadCommentsForPage(page){
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState()

        if(pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: { page },
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
        })
    }
}