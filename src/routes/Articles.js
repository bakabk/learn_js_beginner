import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'
import {Route} from 'react-router-dom'

export default class Articles extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <ArticleList />
                <Route path="/articles" children={ this.getIndex }  exact />
                <Route path="/articles/:id" render={ this.getArticle } />
            </div>
        )
    }

    getArticle = (args) => {
        const { id } = args.match.params
        return <Article id={id} isOpen key={ id }/>
    }

    getIndex = (args) => {
        //for children getIndex always render. For switch it do if(match)
        if (!args.match) return <h2>Article:</h2>
        return <h2>Please select article</h2>
    }
}