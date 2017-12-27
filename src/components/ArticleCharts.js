import React, {Component} from 'react'

class ArticleCharts extends Component{
    componentDidMount(){
        //d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps){
        //update chart with new articles
    }

    render (){
        return(
            <div ref='chart' />
        )
    }

    componentWillUnmount(){
        //some cleanup
    }
}

export default ArticleCharts