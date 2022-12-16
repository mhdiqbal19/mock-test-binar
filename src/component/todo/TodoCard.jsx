import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const TodoCard = (props) => {
    const {todo} = props;
    console.log(todo);
    const {id, title, completed } = todo;
    const navigate = useNavigate();


    return (
        <div>
            <div class="card">
                <div class="content-card">
                    <div>
                        <h1>{title}</h1>
                        <p>{`Completed: ${completed}`}</p>
                    </div>
                    <button className='btn success' 
                    onClick={() => navigate(`/todo/${id}`)}>Detail</button>
                </div>
            </div>
        </div>
    )
}

export default TodoCard