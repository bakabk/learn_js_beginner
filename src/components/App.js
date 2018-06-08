import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Articles from '../routes/Articles'
import NewArticle from '../routes/NewArticle'
import CommentsPage from '../routes/CommentsPage'
import NotFound from '../routes/NotFound'
import UserForm from './UserForm'
import Filters from './filters/Select'
import 'react-select/dist/react-select.css';
import {Router, Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'
import DayPicker from './filters/DayPicker'
import Counter from './Counter'

class App extends Component {
    static PropTypes = {}

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext(){
        return {
            user: this.state.username
        }
    }

    state = {
        username: 'testUser'
    }

    handlerUserChange = (username) => this.setState({username: username})

    render() {
        return (
            <Router history = {history}>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/daypicker">daypicker</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/counter">counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/articles">articles</NavLink></div>
                    </div>
                    <UserForm value={this.state.username} onChange={this.handlerUserChange}/>
                    <Switch>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/daypicker" component={DayPicker}/>
                        <Route path="/counter" component={Counter}/>
                        <Route path="/articles/new" component={NewArticle}/>
                        <Route path="/articles" component={Articles}/>
                        <Route path = '/comments' component = {CommentsPage} />
                        {/*<Redirect from='/comments/' to='comments/1'/>*/}
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App