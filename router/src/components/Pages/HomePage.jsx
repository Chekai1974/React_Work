import React, { useEffect, useState } from 'react';
import axios from "axios"
import { NavLink } from 'react-router-dom';

function HomePage() {  
  const [posts, setPosts] = useState([])
  const [state, setState] = useState(false)

  useEffect(() => {
    async function getAllPosts() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data)
      } catch (error) {
        console.error(error.message);
      }
    }
    getAllPosts()
  }, [])
  function localPost(id) {
  const existingData = localStorage.getItem("id");
  let newData = [];
  setState(!state)
  if (existingData) {
    newData = JSON.parse(existingData);
    const index = newData.indexOf(id);

    if (index > -1) {
      // Удаляем идентификатор, если он уже существует в хранилище
      newData.splice(index, 1);
    } else {
      // Добавляем идентификатор, если его нет в хранилище
      newData.push(id);
    }
  } else {
    newData.push(id);
  }

  localStorage.setItem("id", JSON.stringify(newData));
}

  
  return (
    <>
      {posts.map((elem, index) => {
        return <div key={index} style={{ textAlign: "center", border: "1px solid black", position: "relative" }}>
          <div onClick={() => localPost(elem.id)} className={localStorage.getItem("id") && JSON.parse(localStorage.getItem("id")).includes(elem.id) ? "active-icon" : "not-active"}></div>
          <h3>{elem.id}</h3>
          <p>{elem.title}</p>
          <p style={{ color: "red" }}>{elem.body}</p>
          <NavLink to={`/posts/${elem.id}`}>View More</NavLink>
        </div>
    })}
    </>
  )
}

export default HomePage;
