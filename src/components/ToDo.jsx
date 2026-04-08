import React, { useState } from 'react'

function ToDo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if (task.trim() === "") {
            return
        }
        setTasks(task.concat(task));
        setTask("");
    }
  return (
      <div>
          <input type="text"
              onChange={(event) => { setTask(event.target.value) }}
              value={task}
          />
          <button onClick={addTask}>Add</button>
          <ul>
              {
                  tasks.map((item, index) => (
                      <li key={index}>{item }</li>
                  ))
              }
          </ul>
    </div>
  )
}

export default ToDo