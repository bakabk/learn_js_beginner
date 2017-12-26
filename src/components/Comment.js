import React from 'react'
import PropTypes from 'prop-types'

export default function Comment({comment}) {
    return(
        <div>
            <p>{`Commented by ${comment.user}`}</p>
            <p>{comment.text}</p>
        </div>
    )
}

Comment.protoType = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}