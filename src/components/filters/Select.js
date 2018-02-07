import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {editSelectFilter} from '../../AC/index'
import {connect} from "react-redux";
import _ from 'lodash'

class SelectContainer extends Component {
    PropTypes = {}

    changeSelection = selection => this.props.editSelectFilter(selection.map( option => option.value ))

    render(){
        const {articles, selected} = this.props

        const option = _.map( articles, ( item => {
            return {
                label: item.title,
                value: item.id
            }
        }))

        return (
            <Select
                options={option}
                value={selected}
                onChange={this.changeSelection}
                multi
            />
        )
    }
}

export default connect( (store)=>({
    selected: store.filters.selected,
    articles: store.articles
}), {editSelectFilter})(SelectContainer)