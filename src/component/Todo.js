import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState('')
    const [selectedToEditText, setSelectedToEditText] = useState('')
    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        let list = [...taskList, task]
        setTaskList(list);
        setTask("")
    }

    const handleEdit = (selectedTask) => {
        setEdit(true);
        setEditText(selectedTask)
        setSelectedToEditText(selectedTask)
    }

    const handleDelete = (selectedTask) => {
        let list = taskList;
        list.splice(list.indexOf(selectedTask), 1);
        
        setTaskList([...list])
    }

    const handleOnEdit = (e) => {
        setEditText(e.target.value)
    }

    const handleUpdate = () =>{
        let list = taskList;
        list.splice(list.indexOf(selectedToEditText), 1, editText)

        setTaskList([...list])
        setEdit(false)
    }

  return (
    <div style={{backgroundColor: '#282c34', height: '100vh'}}>
        <label className='label' style={{color: '#f4f4f4', fontSize: "24px", marginLeft: '20px'}}>ToDo List</label><br/>
        <input placeholder='Enter Tasks' className='input' name={task} value={task} type="text" onChange={handleChange} style={{marginLeft: '20px'}}></input>
        <button className='sBtn' onClick={() => {handleAdd()}} style={{marginLeft: '8px'}} >Add</button><br/>
        <div className='taskList'>
            {console.log(taskList)}
            {taskList.map((task, index) => {
                return (
                    <div key={index}>
                        <div className='task'>{task}</div>
                        <button className='sBtn' style={{marginLeft: "28px"}} onClick={() => {handleEdit(task)}}>Edit</button>
                        <button className='sBtn' style={{backgroundColor: "red", marginLeft: "10px"}} onClick={()=>handleDelete(task)}>Delete</button>
                    </div>
                )
            })}
        </div>
        {edit ? 
            <div>
                <input style={{marginLeft: '20px'}} value={editText} className='input' type="text" onChange={handleOnEdit} />
                <button className='sBtn' style={{marginLeft: '8px'}} onClick={() => {handleUpdate()}} >Update</button>
            </div> : ""}
    </div>
  )
}

export default Todo