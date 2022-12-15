import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState  } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
          const responseTodo = res.data;
          setTodoDetails(responseTodo);
      });
  },[])


  const { id: todoId, userId, title, complated } = todoDetails || {};

  return ( 
    <div>
        {todoDetails ? ( 
            <div>
                <h1>{`Todo id : ${todoId}`}</h1>
                <h1>{`Todo userId : ${userId}`}</h1>
                <h1>{`Todo title : ${title}`}</h1>
                <h1>{`Todo complated : ${complated}`}</h1>
            </div>)     
        : (<CircularProgress/>)}  
    </div>
  )
}

export default Todo