import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import api from "./api";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await api.get("/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Todo App</h2>
      <TodoForm onAdd={(todo) => setTodos([...todos, todo])} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
