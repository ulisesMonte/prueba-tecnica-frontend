import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, onComplete,deleteItem,addTask}) {
  return (
    <div>
        {
            tasks.map((task, index)=>(
                <TaskItem key={`task-${index}`} 
                task = {task} 
                onComplete={onComplete} 
                deleteItem={deleteItem} 
                addTask={addTask}/>
            ))
        }
    </div>
  )
}

export default TaskList;
