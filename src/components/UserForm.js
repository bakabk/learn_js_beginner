import React, {Component} from 'react'

export default class UserForm extends Component{
    state={
        username: ''
    }

    render(){
        console.log('render UserForm ', this.state.username)
        return(
            <div>
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
            </div>
        )
    }

    handleUserChange = (ev) => {
        //ex maxLenght = 10
        if (ev.target.value.length > 10) return

        this.setState({
            username: ev.target.value
        })
    }
}