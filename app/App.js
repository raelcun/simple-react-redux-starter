import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Favicon from 'react-favicon'
import store from './store'

const faviconUrl = require('./assets/favicon.ico');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content
					value={store.getState()}
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
				/>
        <Favicon url={ faviconUrl }/>
      </div>
    )
  }
}
