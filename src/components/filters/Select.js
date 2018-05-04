import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {editSelectFilter} from '../../AC/index'
import {connect} from "react-redux";

class SelectContainer extends Component {
    PropTypes = {}

    changeSelection = selection => this.props.editSelectFilter(selection.map( option => option.value ))

    render(){
        const {articles, selected} = this.props

        const options = articles.map( article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select
                options={options}
                value={selected}
                onChange={this.changeSelection}
                multi
            />
        )
    }
}

export default connect( (store)=>({
    selected: store.filters.selected,
    articles: store.articles.entities
}), {editSelectFilter})(SelectContainer)