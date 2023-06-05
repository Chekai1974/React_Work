import React from 'react'
import {NavLink} from "react-router-dom"

function Nav() {
    return (
      <div className='nav'>
        <NavLink to="/"  className={({isActive}) => isActive ? "active-link" : "inactive-link"}>Home</NavLink>
        <NavLink to="/bests" className={({isActive}) => isActive ? "active-link" : "inactive-link"}>Favorite</NavLink>
      </div>
    )
}

export default Nav