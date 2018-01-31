import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

export default class SelectContainer extends Component {
    PropTypes = {}

    state = {
        selection: null
    }

    changeSelection = selection => this.setState({selection})

    render(){
        return (
            <Select
                options={[]}
                value={this.state.selection}
                onChange={this.changeSelection}
                multi
            />
        )
    }
}