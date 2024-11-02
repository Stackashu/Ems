import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Direction.css'

const Direction = () => {
  const navigate = useNavigate()
  return (
   <>
   <nav>
    <NavLink to="/create-task">createTask</NavLink>
<NavLink to="/create-user">create User</NavLink>
   </nav>
   </>
  )
}

export default Direction
