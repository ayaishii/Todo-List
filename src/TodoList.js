import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([{ text: newTask, completed: false }, ...tasks]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // 未完了タスクのリスト
  const incompleteTasks = tasks.filter((task) => !task.completed);

  // 完了タスクのリスト
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <div className="main">
      <h1>ToDo List</h1>
        <div className="container">
          <div className="todo-input">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-blue btn-large" onClick={addTask}>追加する</button>
          </div>

          <div className="task-group">
            <div className="todo-list">
              <h2>未完了タスク</h2>
              <ul>
                {incompleteTasks.map((task, index) => (
                  <li
                    key={index}
                    className={`todo-list-item ${task.completed ? 'completed' : ''}`}
                  >
                    <span className="task">{task.text}</span>
                    
                    <button className="btn btn-delete btn-small" onClick={() => removeTask(index)}>削除</button>

                  </li>
                ))}
              </ul>
            </div>

            <div className="done-list">
              <h2>完了タスク</h2>
              <ul>
                {completeTasks.map((task, index) => (
                  <li
                    key={index}
                    className={`todo-list-item ${task.completed ? 'completed' : ''}`}
                  >
                    <span className="task">{task.text}</span>
                    
                    <button className="btn btn-delete btn-small" onClick={() => removeTask(index)}>削除</button>

                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TodoList;
