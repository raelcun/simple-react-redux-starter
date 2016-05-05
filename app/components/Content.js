import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    myCounter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Content extends React.Component {
  render() {
    const { myCounter, onIncrement, onDecrement } = this.props
    
    return (
      <div>
        <p>Here is some Content <b ref='serverResponse'>{ myCounter }</b></p>
        <input type='button' onClick={onIncrement} value='Increment'></input>
        <input type='button' onClick={onDecrement} value='Decrement'></input>
      </div>
    )
  }
}