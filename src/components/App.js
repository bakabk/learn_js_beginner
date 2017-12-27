import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticleCharts from './ArticleCharts'

class App extends Component{
    render (){
        return(
            <div>
                <ArticleList articles={this.props.articles} />
                <ArticleCharts articles={this.props.articles} />
            </div>
        )
    }
}

export default App