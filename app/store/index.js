import { createStore } from 'redux'
import counter from '../reducers'

const store = createStore(counter, undefined,
	window.devToolsExtension ? window.devToolsExtension() : undefined)

export default store