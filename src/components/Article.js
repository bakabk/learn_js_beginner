import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Comments from './Comments'
import {CSSTransitionGroup} from 'react-transition-group'
import {deleteArticle, loadArticle} from '../AC'
import Loader from './Loader'
import LocalizedText from './LocalizedText'
import './article.css'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    }

    state = {
        updateIndex: 0
    }

    componentDidMount() {
        const {loadArticle, article, id} = this.props
        if (!article || (!article.text && !article.loading)) loadArticle(id)
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        if (!article) return null

        return (
            <div ref={this.containerRef}>
                <h3>{article.title}</h3>
                <button onClick = {this.handleDelete}><LocalizedText>delete me</LocalizedText></button>
                {this.getBody()}
            </div>
        )
    }

    containerRef = ref => {
        this.container = ref
        // console.log('test ref', ref)
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        // console.log('handleDelete click')
    }

    getBody = () => {
        const {article, isOpen} = this.props
        if (!article) return null
        // if (article.loading) return <Loader/>

        return <section>
            {article.text}
            <br/>
            {/*<button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>Updating</button>*/}

            {/*<button onClick={this.handleDelete}>Delete me</button>*/}

            <CSSTransitionGroup
                transitionName="article"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={300}
                component="div">
                <Comments article={article} comments={article.comments} ref={this.componentRef}
                          key={this.state.updateIndex} addComment={this.handleAddComment}/>
            </CSSTransitionGroup>
        </section>
    }

    componentRef = ref => {
        // console.log('findDOMNode_ref', findDOMNode(ref))
        // console.log('ref', ref)
    }
}

export default connect((state, ownProps) => {
        return {
            article: state.articles.entities.get(ownProps.id)
        }
    },
    {deleteArticle, loadArticle},
    null,
    { pure: false }
)(Article)