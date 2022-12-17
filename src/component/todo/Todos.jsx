import { CircularProgress } from '@mui/material';
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import TodoCard from './TodoCard';


const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    },[])


    return (
        <>
        <Navbar/>
            <div className='container'>
                {todos ? 
                (                 
                <div className='container-card'>
                    {todos.slice(0, 9).map(todo => <TodoCard todo={todo}/> )}
                </div>
                )
                : <CircularProgress/>}
            </div>
        </>
    )
}

export default Todos