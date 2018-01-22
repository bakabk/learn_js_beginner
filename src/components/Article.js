import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Comments from './Comments'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends PureComponent{
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        updateIndex: 0
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        console.log('---------', 'updated article')

        return (
            <div ref = {this.containerRef}>
                <h3>{article.title}</h3>
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

    getBody = () => {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return <section>
            {article.text}
            <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})} >Updating</button>

            <CSSTransitionGroup
                transitionName="article"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={300}
            component="div">
            <Comments comments={article.comments} ref={this.componentRef} key={this.state.updateIndex}/>
            </CSSTransitionGroup>
        </section>
    }

    componentRef = ref => {
        // console.log('findDOMNode_ref', findDOMNode(ref))
        // console.log('ref', ref)
    }
}

export default Article