import React, { useState } from 'react';

const TodoCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md mb-4">
      <h3 className="text-lg font-bold mb-2">{task.title}</h3>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <p className="text-gray-500 mb-2">Created at: {task.createdAt}</p>
      <div className="flex justify-end">
        <button
          onClick={() => onEdit(task.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl font-bold text-white">Task Manager</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', createdAt: '01/09/2021, 05:30:00' },
    { id: 2, title: 'Task 2', description: 'Description 2', createdAt: '01/09/2021, 05:30:00' },
    { id: 3, title: 'Task 3', description: 'Description 3', createdAt: '01/09/2024, 05:30:00' },
  ]);

  const [inProgress, setInProgress] = useState([
    { id: 4, title: 'Task 4', description: 'Description 4', createdAt: '01/09/2024, 05:30:00' },
    { id: 5, title: 'Task 5', description: 'Description 5', createdAt: '01/09/2021, 05:30:00' },
  ]);

  const [done, setDone] = useState([
    { id: 6, title: 'Task 6', description: 'Description 6', createdAt: '01/09/2021, 05:30:00' },
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    const newTodo = {
      id: todos.length + 1,
      title: newTask.title,
      description: newTask.description,
      createdAt: new Date().toLocaleDateString(),
    };
    setTodos([...todos, newTodo]);
    setNewTask({ title: '', description: '' });
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTask = (id) => {
    // Implement logic to edit a task
    console.log(`Editing task with ID: ${id}`);
  };

  return (
    <div className="container mx-auto mt-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>

      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="border border-gray-300 px-4 py-2 rounded-md mr-2"
            value={newTask.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="border border-gray-300 px-4 py-2 rounded-md mr-2"
            value={newTask.description}
            onChange={handleInputChange}
          />
          <button onClick={addTask} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">TODO</h2>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              task={todo}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ))}
        </div>
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">IN PROGRESS</h2>
          {inProgress.map((todo) => (
            <TodoCard
              key={todo.id}
              task={todo}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ))}
        </div>
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">DONE</h2>
          {done.map((todo) => (
            <TodoCard
              key={todo.id}
              task={todo}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ))}
        </div>
      </div>
  </div>
  )
};

export default Todo;