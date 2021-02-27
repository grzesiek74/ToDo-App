import React from 'react';
import './Task.css';

const Task = (props) => {

    const { id, text, active } = props.task // props.task - cała tablica właściwości przekazana przez props do Task

    if(active) {
    return ( 
        <div className="list">
            <span>{text}</span>
            <div className="btns">
                <button onClick={() => props.change(id)}><i class="fas fa-check check"></i></button>
                <button onClick={() => props.delete(id)}><i class="fas fa-trash delete"></i></button>
            </div>
        </div>
     )
    } else {
        return (
            <div className="list">
                <span>{text}</span>
                <button className="btnDel" onClick={() => props.delete(id)}><i class="fas fa-trash delete"></i></button>
            </div>
        )
    }
}
 
export default Task;
