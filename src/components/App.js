import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Articles from '../routes/Articles'
import NewArticle from '../routes/NewArticle'
import NotFound from '../routes/NotFound'
import UserForm from './UserForm'
import Filters from './filters/Select'
import 'react-select/dist/react-select.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import DayPicker from './filters/DayPicker'
import Counter from './Counter'

class App extends Component {
    PropTypes = {}

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/daypicker">daypicker</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/counter">counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/UserForm">UserForm</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/articles">articles</NavLink></div>
                    </div>

                    <Switch>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/daypicker" component={DayPicker}/>
                        <Route path="/counter" component={Counter}/>
                        <Route path="/UserForm" component={UserForm}/>
                        <Route path="/articles/new" component={NewArticle}/>
                        <Route path="/articles" component={Articles}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App