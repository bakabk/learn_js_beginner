import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import CommentsForm from './CommentsForm/index'
import LocalizedText from './LocalizedText'
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
        const text = isOpen ? 'hide comments' : 'open comments'

        return (
            <div>
                <div>{this.context.user}</div>
                <button onClick={toggleOpen}><LocalizedText>{text}</LocalizedText></button>
                {getComments({article, isOpen})}
            </div>
        )
    }
}

function getComments({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    if (!isOpen) return null
    if (commentsLoading) return <Loader/>
    if (!commentsLoaded) return null

    if (!comments.length) return <p><LocalizedText>No comments</LocalizedText></p>

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