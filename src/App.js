import './App.css';
import { useState } from 'react';
import data from "./data.json"
import TaskList from './TaskList';
import TaskForm from './TaskForm';
function App() {


  const [tasks , setTasks] = useState(data)

  const addTask = (newTask)=>{
    console.log("newTask" , newTask)
    let idNew = tasks.length+1
    let newItem = {
      id:idNew,
      assignment:newTask,
      completed:false
    }
    setTasks([...tasks, newItem])
  }


  const onComplete = (id) =>{
    setTasks(tasks.map((task)=>{
      return task.id === id ? {...task,completed:!task.completed} : {...task};
    }))
  }

  const deleteItem = (id) =>{
    setTasks([...tasks].filter(task => task.id !== id))
  }

  const pendingTaskCount = tasks.filter(task =>!task.completed).length;
  return (
    <div className="container" >
        <h2 className="pending-tasks">Tareas Pendientes {pendingTaskCount}</h2>
        <TaskForm addTask={addTask} />
        <TaskList tasks = {tasks} onComplete={onComplete} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
