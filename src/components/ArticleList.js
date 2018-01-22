import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component{
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        oppenItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    state = {
        openArticleId: null
    }

    render() {
        const { articles, toggleOpenItem, openItemId } = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
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

export default accordion(ArticleList)