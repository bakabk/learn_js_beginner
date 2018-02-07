import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middleware/logger'

const enhanser = applyMiddleware(logger)

const store = createStore(reducer, {}, enhanser)

//test
//dev only. I don't now about "Redux DevTools"
window.store = store

export default store