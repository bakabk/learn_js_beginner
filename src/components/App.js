import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import SelectContainer from './filters/Select'
import 'react-select/dist/react-select.css';
import DayPicker from './filters/DayPicker'
import Counter from './Counter'

class App extends Component{
    PropTypes = {}

    render (){
        return(
            <div>
                <SelectContainer />
                <DayPicker /> <br /><br />
                <Counter /> <br /><br />
                <UserForm /> <br /><br />
                <ArticleList />
            </div>
        )
    }
}

export default App