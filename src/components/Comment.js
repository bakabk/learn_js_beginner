import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Comment({comment}) {
    return(
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

export default connect((state, ownProps) => {
    return {comment: state.comments.find(comment => comment.id === ownProps.id)}

})(Comment)