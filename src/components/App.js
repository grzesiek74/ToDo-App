import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

counter = 0;

  state = {
    tasks: [
      // {
      //   id: 0,
      //   text: 'Zrobić zakupy',
      //   active: true
      // },
      // {
      //   id: 1,
      //   text: 'Ugotować obiad',
      //   active: false
      // }
    ]
  }

  handleChange = (id) => {
    // console.log('wykonano zadanie ' + id);
    
    let tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false
      }
    })
    this.setState({
      tasks
    })
  }

  handleDelete = (id) => {
    // console.log('usunięto zadanie ' + id);

    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }


  addTask = text => {
    const task = {
      id: this.counter,
      text: text,
      active: true
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task] 
    }))

    return true
  }

  render() {
    return (
      <div className="App">
        <h1 className="appTitle">TODO APP</h1>
        <div className="taskAdd">
          <AddTask add={this.addTask}/>
        </div>
        <div className="taskList">
          <TaskList tasks={this.state.tasks} delete={this.handleDelete} change={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
