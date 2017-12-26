import React, {Component} from 'react'
import Comments from './Comments'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOppen'

class Article extends Component{
    static propTypes = {
        article: PropTypes.object
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Закрыть' : 'Открыть'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody = () => {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return <section>
            {article.text}
            <Comments comments={article.comments} />
        </section>
    }
}

export default toggleOpen(Article)