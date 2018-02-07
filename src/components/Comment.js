import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
    return (
        <div>
            <p>{`Commented by ${comment.user}`}</p>
            <p>{comment.text}</p>
        </div>
    )
}

Comment.protoType = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()
    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment)