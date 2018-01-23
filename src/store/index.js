import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//test
//dev only. I don't now about "Redux DevTools"
window.store = store

export default store