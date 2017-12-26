import React, {Component} from 'react'
import Comment from './Comment'

export default class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const {comments} = this.props

        return (
            <div>
                <button onClick={this.toggleComments}>
                    {this.state.isOpen ? 'Close' : 'Open'}
                </button>
                {this.getComments()}
            </div>
        )
    }

    getComments = () => {
        const {comments} = this.props
        if (!this.state.isOpen) return null

        if (!comments.length) return <p>No comments</p>

        const commentsList = comments && comments.map((comment) => {
            return <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        })

        return <ul>
            {commentsList}
        </ul>
    }

    toggleComments = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}