import React from 'react'
import PropTypes from 'prop-types'
import CommentsPagination from '../components/CommentsPagination'
import {Redirect, Route} from 'react-router-dom'

function CommentsPage({match}) {
    if (match.isExact) return <Redirect to='/comments/1' />
    return <Route from='/comments/:page' render={GetCommentsPaginator} />
}

function GetCommentsPaginator({match}){
    console.log(match,'match')
    return <CommentsPagination page={match.params.page}/>
}

CommentsPage.propTypes = {}

export default CommentsPage