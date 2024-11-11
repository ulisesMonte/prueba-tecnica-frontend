import React from 'react'

function TaskItem({task, onComplete, deleteItem,addTask}) {
    const getStyle = () =>{
        return{
            textDecoration:task.completed ? "line-through":"none",
            margin:"15px",
            border:"1px solid #ffffff",
            backgroundColor:"#CCF7E3"
        }
    }
  return (
    <div style={getStyle()}>
        <input type="checkbox" checked={task.completed} onChange={()=> onComplete(task.id)}/>
        {task.assignment}
        <button className='add-btn' onClick={()=>deleteItem(task.id)}>X</button>
    </div>
  )
}
export default TaskItem;