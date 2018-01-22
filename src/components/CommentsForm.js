import React, {Component} from 'react'

export default class CommentsFrom extends Component {
    state = {
        user: '',
        userValid: true,
        text: '',
        textValid: true
    }

    changeUser = (ev) => {
        let useValid = (ev.target.value.length > 5 && ev.target.value.length < 15) ? true : false
        this.setState({
            user: ev.target.value,
            useValid: useValid
        })
    }

    changeComment = (ev) => {
        let textValid = (ev.target.value.length > 20 && ev.target.value.length < 50) ? true : false
        this.setState({
            text: ev.target.value,
            textValid: textValid
        })
    }


    render() {
        const userValid = this.state.userValid ? 'green' : 'red'
        const textValid = this.state.textValid ? 'green' : 'red'

        console.log('------------')
        console.log('userValid', this.state.user.length)
        console.log('userValid', userValid)
        console.log('------------')
        console.log('textValid', this.state.text.length)
        console.log('textValid', textValid)
        console.log('------------')

        return (
            <div>
                <p>Enter User Name</p>
                <input style={{border: `2px solid ${userValid}`}} type="text" value={this.state.user} onChange={this.changeUser} /> <br />
                <p>Enter Comment</p>
                <textarea style={{border: `2px solid ${textValid}`}} value={this.state.text} onChange={this.changeComment} />
            </div>
        )
    }
}