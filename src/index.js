import React from 'react'
import {render} from 'react-dom'
// import App from './components/App'
import Root from './components/Root'
import store from './store'

render(
    <Root />,
    document.getElementById('container')
)