import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    function HandleSubmit(e){
        e.preventDefault()
        // valid
        navigate("/")
    }



  return (
    <>
    <form>
    <input type="email" />
    <input type='password' />
    <button onClick={HandleSubmit}>Login</button>
    </form>

    
    
    
    </>
  )
}
