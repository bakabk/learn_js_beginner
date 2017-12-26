import React from 'react'
import Comment from './Comment'
import toggleOppen from '../decorators/toggleOppen'

    function Comments ({comments = [], isOpen, toggleOpen}){
        const text = isOpen ? 'hide comments' : 'open comments'

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getComments({comments, isOpen})}
            </div>
        )
    }

    function getComments ({comments, isOpen}) {
        if (!isOpen) return null
        if (!comments.length) return <p>No comments</p>

        return (
            <ul>
                {comments.map( comment => <li key={comment.id}> <Comment comment={comment} /> </li>)}
            </ul>
        )
    }

export default toggleOppen(Comments)