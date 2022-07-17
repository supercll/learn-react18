let updateQueue = []
let lastPriority = -1
let state = { number: 0 }
const InputPriority = 1
const NormalPriority = 1
let lastUpdatePriority

function setState(newState, priority) {
  updateQueue.push(newState)
  if (lastUpdatePriority === priority) {
    return
  }
  lastUpdatePriority = priority
  setTimeout(() => {
    updateQueue.forEach(newState => {
      state = newState
    })
  })
}
function flushSync(fn) {
  lastUpdatePriority = null
  fn()
}

const handleCLick = () => {
  setState({ number: state.number + 1 }, InputPriority)
  console.log('number', state.number)
  setState({ number: state.number + 1 }, InputPriority)
  console.log('number', state.number)
  setTimeout(() => {
    setState({ number: state.number + 1 }, NormalPriority)
    console.log('number', state.number)
    setState({ number: state.number + 1 }, NormalPriority)
    console.log('number', state.number)
  }, 500)
}
handleCLick()
