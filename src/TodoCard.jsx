import React from 'react'
import { useNavigate } from 'react-router-dom';

const TodoCard = (props) => {
    const {todo} = props;
    console.log(todo);
    const {id, title, completed } = todo;
    const navigate = useNavigate();


    return (
        <div style={{ 
            backgroundColor: "grey", 
            margin: "10px", 
            padding: "15px",
            width: "150px",
        }}
        onClick={() => navigate(`/todo/${id}`)}
        >
            <h4>{title}</h4>
            <hp>{`Completed: ${completed}`}</hp>
        </div>
    )
}

export default TodoCard