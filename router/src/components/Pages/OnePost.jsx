import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function OnePost() {
  const { id } = useParams();
  const [coment, setComent]= useState([])
  useEffect(() => {
    async function getMoreInfoPosts() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        setComent(response.data)
      } catch(error) {
        console.error(error.message);
      }
      
    }
    getMoreInfoPosts()
  },[id])
  return (
    <div>
      <h2>Id: {coment.id}</h2>
      <p>Name: {coment.name}</p>
      <p>Email: {coment.email}</p>            
      <p>Body: {coment.body}</p>            
    </div>
  );
}

export default OnePost;
