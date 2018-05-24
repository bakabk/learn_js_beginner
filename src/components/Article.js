import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Comments from './Comments'
import { CSSTransitionGroup } from 'react-transition-group'
import {deleteArticle, loadArticle} from '../AC'
import Loader from './Loader'
import './article.css'

class Article extends PureComponent{
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    }

    state = {
        updateIndex: 0
    }

    componentWillReceiveProps({isOpen, loadArticle, article}){
        if (isOpen && !article.text && !article.loading) loadArticle(article.id)
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render() {
        console.log('this.props---------', this.props)
        const {article, isOpen, toggleOpen} = this.props
        if(!article) return null

        return (
            <div ref = {this.containerRef}>
                {/*<h3>{article.title}</h3>*/}
                <button onClick={toggleOpen}>
                    {isOpen ? 'Закрыть' : 'Открыть'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    containerRef = ref => {
        this.container = ref
        // console.log('test ref', ref)
    }

    componentDidMount() {
        // console.log('test - container did mount')
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('handleDelete click')
    }

    getBody = () => {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader />
        return <section>
            {article.text}
            <br />
            <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})} >Updating</button>

            <button onClick={this.handleDelete}>Delete me</button>

            <CSSTransitionGroup
                transitionName="article"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={300}
            component="div">
            <Comments article={article} comments={article.comments} ref={this.componentRef} key={this.state.updateIndex} addComment={this.handleAddComment}/>
            </CSSTransitionGroup>
        </section>
    }

    componentRef = ref => {
        // console.log('findDOMNode_ref', findDOMNode(ref))
        // console.log('ref', ref)
    }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article)