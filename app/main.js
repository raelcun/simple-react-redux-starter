require("./assets/style.scss")

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'

//ReactDOM.render(<App/>, document.getElementById('root'))

const render = () =>
	ReactDOM.render(
		<App
			value={store.getState()}
			onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
		/>,
		document.getElementById('root')
	)

render()
store.subscribe(render)