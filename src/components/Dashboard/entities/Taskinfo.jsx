import React from 'react'
import "./Taskinfo.css"
const Taskinfo = ({data}) => {
    
  return (
    <div className="taskinfo">
        <div className='info'>
            <h1>{data.taskCounts.newTask}</h1>
            <h2>New Task</h2>
        </div>
        <div className='info2'>
            <h1>{data.taskCounts.active}</h1> 
            <h2>Active Task</h2>
        </div>
        <div className='info3'>
            <h1>{data.taskCounts.completed}</h1>
            <h2>Completed Task</h2>
        </div>
        <div className='info4'>
            <h1>{data.taskCounts.failed}</h1>
            <h2>Failed Task</h2>
        </div>
    </div>
  )
}

export default Taskinfo
