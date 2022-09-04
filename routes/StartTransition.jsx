import React, { useState, useEffect, startTransition } from 'react'

// 模拟请求操作
function getWords(keyword) {
  let words = new Array(10000).fill(keyword)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(words)
    }, 1000 * keyword.length)
  })
}

// 联想功能，渲染联想列表
function Suggestions({ keyword }) {
  const [words, setWords] = useState([])
  useEffect(() => {
    if (keyword && keyword.length > 0) {
      getWords(keyword).then(words => {
        // setWords(words)
        startTransition(() => {
          setWords(words)
        })
      })
    }
  })
  return (
    <ul>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  )
}

// 组件
function StartTransitionPage() {
  const [keyword, setKeyword] = useState('')
  const handleChange = event => {
    setKeyword(event.target.value)
  }
  return (
    <div>
      <div>
        关键字<input value={keyword} onChange={handleChange}></input>
      </div>
      <Suggestions keyword={keyword} />
    </div>
  )
}
export default StartTransitionPage
