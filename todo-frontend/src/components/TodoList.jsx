import api from "../api";

const TodoList = ({ todos, setTodos }) => {
  const toggleComplete = async (id, completed) => {
    const res = await api.put(`/todos/${id}`, { completed: !completed });
    setTodos(todos.map(todo => todo._id === id ? res.data : todo));
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {todos.map(todo => (
        <li key={todo._id} style={{ marginBottom: "10px" }}>
          <span
            onClick={() => toggleComplete(todo._id, todo.completed)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            {todo.title}
          </span>

          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
