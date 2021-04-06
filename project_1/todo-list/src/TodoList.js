import React from "react";
import "./TodoList.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      onDoubleClick={() => completeTodo(index)}>
      <p className="text" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</p>
      <div>
        <a class="remove" onClick={() => removeTodo(index)}>🗑</a>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add task and press enter to submit"
        onChange={e => setValue(e.target.value)}
      />
      <button className="button-cta" onClick={handleSubmit}>Create</button>
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = React.useState([
    {
      text: "Task #1",
      isCompleted: false
    },
    {
      text: "Task #2",
      isCompleted: true
    },
    {
      text: "Task #3",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
        <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        
      </div>
    </div>
  );
}

export default TodoList;