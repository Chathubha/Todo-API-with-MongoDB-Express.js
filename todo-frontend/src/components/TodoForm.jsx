import { useState } from "react";
import api from "../api";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await api.post("/todos", { title });
    onAdd(res.data);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        placeholder="Enter a todo"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <button style={{ padding: "8px 12px", marginLeft: "8px" }}>Add</button>
    </form>
  );
};

export default TodoForm;
