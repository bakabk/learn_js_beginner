import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticleCharts from './ArticleCharts'
import UserForm from './UserForm'

class App extends Component{
    render (){
        return(
            <div>
                <UserForm />
                <ArticleList articles={this.props.articles} />
                <ArticleCharts articles={this.props.articles} />
            </div>
        )
    }
}

export default App