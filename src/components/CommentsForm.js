import React, {Component} from 'react'

export default class CommentsFrom extends Component {
    state = {
        user: '',
        userValid: true,
        text: '',
        textValid: true
    }

    changeUser = (ev) => {
        if (ev.target.value.length < 15) return

        let userValid = (ev.target.value.length > 5) ? true : false
        this.setState({
            user: ev.target.value,
            userValid: userValid
        })
    }

    changeComment = (ev) => {
        if (ev.target.value.length < 50) return

        let textValid = (ev.target.value.length > 20) ? true : false
        this.setState({
            text: ev.target.value,
            textValid: textValid
        })
    }


    render() {
        const userValid = this.state.userValid ? '' : 'red'
        const textValid = this.state.textValid ? '' : 'red'

        return (
            <div>
                <p>Enter User Name</p>
                <input style={{border: `1px solid ${userValid}`}} type="text" value={this.state.user} onChange={this.changeUser} /> <br />
                <p>Enter Comment</p>
                <textarea style={{border: `1px solid ${textValid}`}} value={this.state.text} onChange={this.changeComment} />
            </div>
        )
    }
}