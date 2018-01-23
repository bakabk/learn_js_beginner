import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'
// import App from './components/App'
import Root from './components/Root'
import store from './store'

render(
    <Root articles={articles} />,
    document.getElementById('container')
)