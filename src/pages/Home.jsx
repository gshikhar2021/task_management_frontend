import { useEffect, useState } from "react";
import { fetchTasks, markTaskAsDone, createTask } from "../utils/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [ws, setWs] = useState(null);
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, [token, navigate]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksData = await fetchTasks(token);
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    loadTasks();

    const socket = new WebSocket(`ws://localhost:8080/ws?username=${username}`);
    setWs(socket);

    socket.onmessage = (event) => {
      alert(`New Task Assigned: ${event.data}`);
      loadTasks();
    };

    return () => socket.close();
  }, [username, token]);

  const handleCreateTask = async (taskData) => {
    if (!token) return;

    try {
      await createTask(
        {
          title: taskData.title,
          description: taskData.description,
          assigned_to: taskData.assignedTo,
        },
        token
      );
      setTasks(await fetchTasks(token));
      alert("Task created successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task!");
    }
  };

  const handleMarkDone = async (taskId) => {
    if (!token) return;

    try {
      await markTaskAsDone(taskId, token);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error marking task as done:", error);
    }
  };

  return token ? (
    <div className="bg-gray-100 min-h-screen w-screen flex justify-center items-center p-8">
      <div className="w-screen max-w-[90%] lg:max-w-[80%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Welcome, {username}!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <TaskForm onCreate={handleCreateTask} />
          <TaskList tasks={tasks} onMarkDone={handleMarkDone} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Home;
