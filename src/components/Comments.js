import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import CommentsForm from './CommentsForm/index'
import toggleOppen from '../decorators/toggleOppen'
import {loadArticleComments} from '../AC'
import {connect} from 'react-redux'

class Comments extends Component {
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props

        console.log('----', this.context)

        const text = isOpen ? 'hide comments' : 'open comments'

        return (
            <div>
                <div>{this.context.user}</div>
                <button onClick={toggleOpen}>{text}</button>
                {getComments({article, isOpen})}
            </div>
        )
    }
}

function getComments({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    if (!isOpen) return null
    if (commentsLoading) return <Loader/>
    if (!commentsLoaded) return null

    if (!comments.length) return <p>No comments</p>

    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            <CommentsForm articleId={id}/>
        </div>
    )
}

export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOppen(Comments))