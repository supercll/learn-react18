import React, {
  useState,
  useEffect,
  useTransition,
  useDeferredValue,
} from 'react'

function UseTransitionPage() {
  const [keyword, setKeyword] = useState('')
  const useDeferredKeyword = useDeferredValue(keyword)
  const [isPending, startTransition] = useTransition()
  const handleChange = event => {
    startTransition(() => {
      setKeyword(event.target.value)
    })
  }
  return (
    <div>
      <div>
        关键字<input value={keyword} onChange={handleChange}></input>
      </div>
      {isPending ? (
        'loading'
      ) : (
        <ul>
          {keyword &&
            new Array(1000)
              .fill(useDeferredKeyword)
              .map((word, index) => <li key={index}>{word}</li>)}
        </ul>
      )}
    </div>
  )
}
export default UseTransitionPage
