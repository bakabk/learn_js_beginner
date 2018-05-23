import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {loadAllArticles} from "../AC";
import Loader from './Loader'
import {NavLink} from 'react-router-dom'

class ArticleList extends Component{
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        oppenItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    }

    componentDidMount(){
        const {loaded, loading, loadAllArticles} = this.props
        if (!loaded && !loading) loadAllArticles()
    }

    render() {
        const { articles, loading } = this.props

        if (loading) return <Loader />

        const articleElements = articles.map( article => <li key={article.id}>
            <NavLink activeStyle={{color: 'red'}} to={`/articles/${article.id}`}>
                {article.title}
            </NavLink>
            {/*<Article*/}
                {/*article={article}*/}
                {/*isOpen={article.id === openItemId}*/}
                {/*toggleOpen={toggleOpenItem(article.id)}*/}
            {/*/>*/}
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(ArticleList)