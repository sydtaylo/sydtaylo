import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import mainRouter from './reducers'
import Root from './components/Root'

const store = createStore(mainRouter)

render(<Root store={store} />, document.getElementById('root'))