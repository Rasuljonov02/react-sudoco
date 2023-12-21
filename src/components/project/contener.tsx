import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import deleteImage from '../delete.png';

function Navbar() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');

      toast.success('Todo added successfully!');
    } else {
      toast.error('Please enter a todo.');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);

    toast.success('Todo deleted successfully!');
  };

  const handleSaqlashButtonClick = () => {
    handleAddTodo();
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
          />
          <button
            className="px-5 py-2 bg-slate-600 text-yellow-50 rounded-xl italic hover:-translate-y-1 active:scale-90"
            onClick={handleSaqlashButtonClick}
          >
            Saqlash
          </button>
        </span>
        <ul className="mt-4 gap-3">
          {todos.map((todo, index) => (
            <li key={index} className="text-white flex gap-5  px-3 py-2 w-[200px] bg-slate-500 justify-between">
              {todo}
              <img className='cursor-pointer' src={deleteImage} alt="Delete" onClick={() => handleDeleteTodo(index)} />
            </li>
          ))}
        </ul>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Navbar;
