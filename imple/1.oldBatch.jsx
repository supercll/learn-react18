let isBatchingUpdate = false
let updateQueue = []
let state = { number: 0 }
function setState(newState) {
  if (isBatchingUpdate) {
    updateQueue.push(newState)
  } else {
    state = newState
  }
}
const handleCLick = () => {
  setState({ number: state.number + 1 })
  console.log('number', state.number)
  setState({ number: state.number + 1 })
  console.log('number', state.number)
  setTimeout(() => {
    setState({ number: state.number + 1 })
    console.log('number', state.number)
    setState({ number: state.number + 1 })
    console.log('number', state.number)
  }, 0)
}
function batchedUpdates(fn) {
  isBatchingUpdate = true
  fn()
  isBatchingUpdate = false
  updateQueue.forEach(newState => {
    state = newState
  })
}
batchedUpdates(handleCLick)
