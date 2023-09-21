import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (todo: FormEvent) => {
    todo.preventDefault();

    if (newTodo) dispatch(add(newTodo));
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(todo) => setNewTodo(todo.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
};
