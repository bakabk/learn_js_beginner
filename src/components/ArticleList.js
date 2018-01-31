import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component{
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        oppenItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { filter, articles, toggleOpenItem, openItemId } = this.props

        console.log('articles', articles)
        console.log('filter', filter)

        let filteredArticles = articles

        if (filter && filter.filter && filter.filter.from && filter.filter.to){
            filteredArticles = articles.filter(article => ( Date.parse(article.date) >= Date.parse(filter.filter.from) && Date.parse(article.date) <= Date.parse(filter.filter.to) ) )
        }

        const articleElements = filteredArticles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openItemId}
                toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect( store => ({
    articles: store.articles,
    filter: store.filter
}))(accordion(ArticleList))