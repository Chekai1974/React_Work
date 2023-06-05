import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Favorite() {
  const [list, setList] = useState([])
  const ids = JSON.parse(localStorage.getItem("id")) || [];
  useEffect(() => {
    async function getBestsPosts() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setList(response.data)
    }
    getBestsPosts()
  }, [])
  
  const filteredList = list.filter(elem => ids.includes(elem.id));
  
  return (
    <>
      {filteredList.map((elem, index) => {
        return (
          <div key={index} style={{ textAlign: "center", border: "1px solid black", width:"300px"}}>
          <h3>{elem.id}</h3>
          <p>{elem.title}</p>
          <p style={{ color: "red" }}>{elem.body}</p>
          <NavLink style={{ color: "green", textDecoration: "none" }} to={`/posts/${elem.id}`}>View More</NavLink>
        </div>
        )
      })}
    </>
  )
}

export default Favorite;