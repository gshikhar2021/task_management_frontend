const TaskList = ({ tasks = [], onMarkDone }) => {
  console.log("TaskList received tasks:", tasks);

  if (!Array.isArray(tasks)) {
    console.error("TaskList received invalid tasks:", tasks);
    return (
      <p className="text-red-500 text-center">Error: Invalid task data.</p>
    );
  }

  const pendingTasks = tasks.filter((task) => task.status === "Pending");

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Pending Tasks
      </h2>

      {pendingTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No pending tasks 🎉</p>
      ) : (
        <ul className="space-y-3">
          {pendingTasks.map((task, index) => (
            <li
              key={task?.id || index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <span className="text-gray-700 font-medium text-lg">
                {task?.title || "Untitled Task"}
              </span>
              <input
                type="checkbox"
                className="w-6 h-6 accent-green-500 cursor-pointer"
                onChange={() => task?.id && onMarkDone(task.id)}
                disabled={!task?.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
