import { useEffect, useRef, useState } from 'react'



function App() {
  // const [count, setCount] = useState(0)
  // let x = useRef(5) // {current: 5}
  // let z = 5
  const head = useRef()

  // function fun() {
  //   x.current = x.current+1
  //   z++
  //   setCount(prev => prev + 1)
  // }

  // console.log(head.current)

  // useEffect(() => {
  //   console.log(head.current)
  //   head.current.textContent = "jgzkaquz"
  // }, [age])
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }
const [age, setAge] = useState(24);
useEffect(() => {
  console.log(head.current)
  head.current.textContent = "Change"
  head.current.style.border = "4px solid red"
  head.current.style.width = "20%"
})

function increment(){
  setAge(prev => prev + 1)
}
  

 

  return (
    <>
    <h1 ref={head}>Your age: {age}</h1>
    <button onClick={increment}>{age}</button>
    {/* <button onClick={handleClick}>
      You pressed me {count} times
    </button> */}


    {/* {count}
      <button onClick={fun}>click!</button> */}
    </>
  )
}

export default App

function App() {
  const [count,setCount] = useState(0)

  const doubleCount = useMemo(doubleCountFun, [count])

  const [revCount, setRevCount] = useState(20)

  function handleClick() {
    setCount(prevCount => ++prevCount)
  }

  function handleRevClick() {
    setRevCount(prevRevCount => --prevRevCount)
  }

  function doubleCountFun() {
    console.log("Double Count Computed")
    return count * 2
  }

  return (
    <>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <p>Reverse Count: {revCount}</p>
      <button onClick={handleClick}>Click Count</button>
      <button onClick={handleRevClick}>Click Rev Count</button>
    </>
  )
}

export default App
