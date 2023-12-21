import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import deleteImage from "../delete.png";

function Navbar() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [editableTodoIndex, setEditableTodoIndex] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
      toast.success("Todo added successfully!");
    } else {
      toast.error("Please enter a todo.");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditableTodoIndex(null);
    toast.success("Todo deleted successfully!");
  };

  const handleEditTodo = (index: number) => {
    setEditableTodoIndex(index);
    setNewTodo(todos[index]);
  };

  const handleSaveEdit = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editableTodoIndex!] = newTodo;
      setTodos(updatedTodos);
      setNewTodo("");
      setEditableTodoIndex(null);
      toast.success("Todo edited successfully!");
    } else {
      toast.error("Please enter a valid todo.");
    }
  };

  const handleCancelEdit = () => {
    setEditableTodoIndex(null);
    setNewTodo("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (editableTodoIndex !== null) {
        handleSaveEdit();
      } else {
        handleAddTodo();
      }
    }
  };

  return (
    <div className="w-[100%] gap-3 grid place-items-center">
      <div className="pt-10 gap-3 grid place-items-center h-[auto]">
        <h1 className="font-sans italic text-[50px]">Todo List</h1>
        <span className="flex items-center gap-4 mt-4">
          <input
            className="w-[300px] px-8 py-2 bor rounded-xl bg-slate-600 placeholder:italic placeholder:text-white text-white"
            type="text"
            placeholder="So'z kiriting"
            value={newTodo}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {editableTodoIndex !== null ? (
            <>
              <button
                className="px-3 py-2 bg-slate-600 text-yellow-50 rounded-xl italic hover:-translate-y-1 active:scale-90"
                onClick={handleSaveEdit}
              >
                Saqlash
              </button>
              <button
                className="px-3 py-2 bg-slate-600 text-yellow-50 rounded-xl italic hover:-translate-y-1 active:scale-90"
                onClick={handleCancelEdit}
              >
                Bekor qilish
              </button>
            </>
          ) : (
            <button
              className="px-5 py-2 bg-slate-600 text-yellow-50 rounded-xl italic hover:-translate-y-1 active:scale-90"
              onClick={handleAddTodo}
            >
              Saqlash
            </button>
          )}
        </span>
        <ul className="mt-4 flex flex-col gap-3 h-[400px] overflow-scroll">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`rounded-xl text-white flex gap-5 px-3 py-2 w-[400px] bg-slate-500 justify-between ${
                editableTodoIndex === index ? "bg-slate-700" : ""
              }`}
            >
              {editableTodoIndex === index ? (
                <p className="w-[150px] px-2 py-1 rounded-md bg-slate-600 text-white">{newTodo}</p>
              ) : (
                <span>{todo}</span>
              )}

              <span className="flex gap-1 items-center">
                {editableTodoIndex !== index && (
                  <img
                    id="pen"
                    className="cursor-pointer w-[25px]"
                    src="https://cdn-icons-png.flaticon.com/512/1860/1860115.png"
                    alt=""
                    onClick={() => handleEditTodo(index)}
                  />
                )}
                <img
                  className="cursor-pointer"
                  src={deleteImage}
                  alt="Delete"
                  onClick={() => handleDeleteTodo(index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Navbar;
