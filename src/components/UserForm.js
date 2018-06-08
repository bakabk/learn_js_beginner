import React, {Component} from 'react'

export default class UserForm extends Component{
    render(){
        return(
            <div>
                Name: <input type="text" value={this.props.value} onChange={this.handleUserChange} />
            </div>
        )
    }

    handleUserChange = (ev) => {
        //ex maxLenght = 10
        if (ev.target.value.length > 10) return

        this.props.onChange(ev.target.value)
    }
}