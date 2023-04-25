import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSlice } from "./TodoSlice";
import styles from "./Todos.module.css";

function Todos() {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const task = { id: Date.now(), title: input, completed: false };
      dispatch(todosSlice.actions.addTask(task));
      setInput("");
    }
    console.log(tasks);
  };
  const hanldeToggle = (id) => {
    dispatch(todosSlice.actions.toggleTask(id));
  };
  const handleDelete = (id) => {
    dispatch(todosSlice.actions.deleteTask(id));
  };

  return (
    <div className={styles.todoContainer}>
      <h3>Redux Assingment 1</h3>
      <h3>Todo List</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name=""
        id=""
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
      <ul>
        {tasks.map((task) => (
          <li>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => hanldeToggle(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;