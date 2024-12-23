import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blogs() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      setTodos(json)
      console.log(json[0])
    })

  },[])
  
  return (
    <div>{todos.map(todo => (
      <div className= "box"key={todo.id}>{todo.title}<br/>
      <Link to={`/blogs/${todo.id}`} >Readmore</Link>
      
      </div>
    ))}</div>
  )
}
