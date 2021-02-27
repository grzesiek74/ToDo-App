import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active); // task.active === true
    const done = props.tasks.filter(task => !task.active); // task.active === false
    

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete}/>)

    return ( 
        <>
            <div className="active">
                <h1>Zadania do wykonania <em>({active.length})</em></h1>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań na liście</p>}
            </div>

            <div className="done">
                <h3>Zadania wykonane <em>({done.length})</em></h3>
                {doneTasks}
            </div>
        </>    
     );
}
 
export default TaskList;