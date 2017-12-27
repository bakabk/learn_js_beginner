import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Comments from './Comments'
import PropTypes from 'prop-types'
import toggleOppen from '../decorators/toggleOppen'

class Article extends Component{
    static propTypes = {
        article: PropTypes.object
    }

    componentWillReceiveProps(nextProps){
        console.log('willResive', this.props.isOpen, nextProps.isOpen )
    }

    componentWillMount() {
        console.log('will')
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props

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
        console.log('---', ref)
    }

    componentDidMount() {
        console.log('did')
    }

    getBody = () => {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return <section>
            {article.text}
            <Comments comments={article.comments} ref={this.componentRef}/>
        </section>
    }

    componentRef = ref => {
        console.log('findDOMNode_ref', findDOMNode(ref))
        console.log('ref', findDOMNode(ref))
    }
}

export default Article