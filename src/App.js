import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Todoform from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.isCompleted === false;
      })
    );
  };

  const completedTodoCount = todos.filter((todo) => {
    return todo.isCompleted;
  }).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todoform addTodo={addTodoHandler} />

      {todos.length !== 0 && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodoCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodoCount > 0 && (
        <h1>{`You have completed ${completedTodoCount} ${
          completedTodoCount < 2 ? "todo" : "todos"
        }`}</h1>
      )}
    </div>
  );
}

export default App;
