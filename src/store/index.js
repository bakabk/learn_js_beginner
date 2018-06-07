import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middleware/logger'
import randomId from '../middleware/randomId'
import api from '../middleware/api'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const enhanser = applyMiddleware(thunk, routerMiddleware(history), randomId, api, logger)

const store = createStore(reducer, {}, enhanser)

//test
//dev only. I don't now about "Redux DevTools"
window.store = store

export default store