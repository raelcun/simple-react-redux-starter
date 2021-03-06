export default function counter(state = { counter: 0 }, action) {
	console.log(action)
	switch (action.type) {
		case 'INCREMENT': return { counter: state.counter + 1 }
		case 'DECREMENT': return { counter: state.counter - 1 }
		default: return state
	}
}