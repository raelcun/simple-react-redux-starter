import React from 'react'

export default class Content extends React.Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    
    return (
      <div>
        <p>Here is some Content <b ref='serverResponse'>{ value.counter }</b></p>
        <input type='button' onClick={onIncrement} value='Increment'></input>
        <input type='button' onClick={onDecrement} value='Decrement'></input>
      </div>
    )
  }
}
