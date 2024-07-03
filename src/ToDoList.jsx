import React , { useState } from 'react';
function ToDoList()
{
    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState(" ");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask()
    {
        if(newTask !== " ")
            {
                setTasks(t => [...t, newTask]);
                setNewTask(" ");    
            }
    }
    function deleteTask(index)
    {
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }
    function upTask(index)
    {
        if(index>0)
        {
            const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [
            updatedTasks[index-1],updatedTasks[index]
        ];
        setTasks(updatedTasks);
        }
    }
    function downTask(index)
    {
        if(index < tasks.length-1)
            {
                const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [
            updatedTasks[index+1],updatedTasks[index]
        ];
        setTasks(updatedTasks);
            }
    }

    return(
        <div className="todoList">
        <h1>To-Do-List</h1>
        <div className="input-element">
        <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
        />
        <button 
           className="add-button"
           onClick={() => addTask()}
        >
            Add
        </button>
        </div>
        <ol>
            {tasks.map((task , index) =>
            <li className="list">
                <span key={index} className="text">{task}</span>
                <button 
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                    >
                        Delete
                </button>
                <button 
                    className="up-button"
                    onClick={() => upTask(index)}
                    >
                        👆
                </button>
                <button 
                    className="down-button"
                    onClick = {() => downTask(index)}
                    >
                        👇
                </button>
            </li>
            )
            }
        </ol>
        </div>
    );
}
export default ToDoList