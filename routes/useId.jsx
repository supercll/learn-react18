import React, { useId } from 'react'
function UseId() {
  const id = useId()
  console.log(id)
  return (
    <div>
      <label htmlFor={id}>useId: {id}</label>
      <input type="checkbox" id={id} />
    </div>
  )
}

function UseIdList() {
  return (
    <ul>
      {new Array(10).fill(0).map(item => {
        const id = useId()
        return (
          <li key={id}>
            <UseId></UseId>
          </li>
        )
      })}
    </ul>
  )
}
export default UseIdList
