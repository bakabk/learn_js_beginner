import React from 'react'
import Comment from './Comment'
import toggleOppen from '../decorators/toggleOppen'
import CommentsForm from './CommentsForm'

function Comments({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'open comments'

    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getComments({comments, isOpen})}
        </div>
    )
}

function getComments({comments, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return <p>No comments</p>

    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            <CommentsForm id={comments}/>
        </div>
    )
}

export default toggleOppen(Comments)