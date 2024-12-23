import React, { useState, useEffect } from 'react'
import { useParams, useRoutes } from 'react-router-dom'

export default function Blog() {

    const params = useParams()
    const [todo, setTodo] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.uid}`)
        .then(response => response.json())
        .then(json => {
          setTodo(json)
          console.log(json)
        })
    
      },[])
      


     // {id: "----"}
  return (
    <div>Blog {todo.title}</div>
  )
}
