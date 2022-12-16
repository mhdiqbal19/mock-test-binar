import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState  } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import './style.css'
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';


const Todo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();
  const navigate  = useNavigate();

  useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
          const responseTodo = res.data;
          setTodoDetails(responseTodo);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const { id: todoId, userId, title, completed } = todoDetails || {};

  return ( 
    <>
    <Navbar/>
    <div className='container'>
        {todoDetails ? ( 
            <div className='card'>
            <div className='card-title'>Detail List</div>
                <div className='content-card-detail'>
                        <h3>{`Todo id : ${todoId}`}</h3>
                        <h3>{`Todo userId : ${userId}`}</h3>
                        <h3>{`Todo title : ${title}`}</h3>
                        <h3>{`Todo complated : ${completed}`}</h3>
                        <button className='btn success' 
                        onClick={() => navigate(`/`)}>Back</button>
                </div>

            </div>)     
        : (<CircularProgress/>)}  
    </div>
    </>
  )
}

export default Todo