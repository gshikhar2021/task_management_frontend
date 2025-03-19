const API_URL = "http://localhost:8080"; // Golang Backend URL

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
        console.log("Login Response:", data); // ✅ Log response for debugging

        if (!response.ok) {
            throw new Error(data.error || "Login failed");
        }

        return data;
    } catch (error) {
        console.error("Login API Error:", error);
        throw error;
    }
};



export const fetchTasks = async (token) => {
    console.log("Fetching tasks with token:", token);
    
    const response = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  
    if (!response.ok) {
      console.error("Error fetching tasks:", response.status, await response.text());
      throw new Error("Failed to fetch tasks");
    }
  
    const data = await response.json();
    console.log("API Response Data:", JSON.stringify(data, null, 2)); // ✅ Log response
  
    // 🔥 Fix: API returns an array directly, no need for `.tasks`
    return Array.isArray(data) ? data : []; 
  };
  
  

export const createTask = async (taskData, token) => {
    const response = await fetch(`${API_URL}/tasks/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(taskData),
    });
    return response.json();
};

export const markTaskAsDone = async (taskId, token) => {
    await fetch(`${API_URL}/tasks/${taskId}/done`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
    });
};
