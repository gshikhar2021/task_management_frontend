import { useState } from "react";

const TaskForm = ({ onCreate }) => {
  const [task, setTask] = useState({ title: "", description: "", assignedTo: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!task.title.trim() || !task.description.trim() || !task.assignedTo.trim()) {
      alert("All fields are required!");
      return;
    }

    onCreate(task);
    setTask({ title: "", description: "", assignedTo: "" }); // Reset form after submission
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg w-full">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Create Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mt-3 resize-none"
        rows="3"
        onChange={handleChange}
      ></textarea>

      <input
        type="text"
        name="assignedTo"
        placeholder="Assign to (Username)"
        value={task.assignedTo}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mt-3"
        onChange={handleChange}
      />

      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg transition duration-200 mt-4"
        onClick={handleSubmit}
      >
        Create Task
      </button>
    </div>
  );
};

export default TaskForm;
