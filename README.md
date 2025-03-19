# Task Management App

A real-time task management application built using **React, Golang (Gin), MongoDB, WebSockets**, and **Tailwind CSS**. This app allows users to create, assign, and mark tasks as done, with real-time updates via WebSockets.

## Features

### 1. User Authentication
- Users can **sign up** and **log in** securely.
- JWT-based authentication for secure API requests.

![alt text](<Images/Screenshot 2025-03-20 at 01.22.59.png>)
![alt text](<Images/Screenshot 2025-03-20 at 01.23.47.png>)

### 2. Create Tasks
- Users can create a new task with:
  - **Title**
  - **Description**
  - **Assigned User**
- Task is stored in the database and updates all connected clients in real time.

![**Screenshot**](<Images/Screenshot 2025-03-20 at 01.25.13.png>)
![alt text](<Images/Screenshot 2025-03-20 at 01.25.38.png>)

### 3. View Pending Tasks
- Users can see only tasks assigned to them.
- Tasks are **filtered** to show only pending ones.
- Real-time updates ensure users always see the latest tasks.

![alt text](<Images/Screenshot 2025-03-20 at 01.26.27.png>)

### 4. Mark Tasks as Done ✅
- Users can mark their tasks as **completed**.
- The task disappears from the list after marking it as done.
- The update is synced in real-time across all users.


### 5. WebSocket Notifications 📡
- Users receive real-time notifications when a task is assigned to them.
- WebSocket connection ensures updates without manual refresh.

![**Screens](<Images/Screenshot 2025-03-20 at 01.28.11.png>)
![alt text](<Images/Screenshot 2025-03-20 at 01.28.37.png>)

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Golang (Gin), MongoDB
- **Real-time Updates**: WebSockets
- **Authentication**: JWT

## Setup Instructions

### 1. Clone the repository
```sh
git clone https://github.com/gshikhar2021/task_management_frontend.git
cd task-manager
```

### 2. Backend Setup
1. Install Go dependencies:
   ```sh
   go mod tidy
   ```
2. Start the backend server:
   ```sh
   go run main.go
   ```

### 3. Frontend Setup
1. Install Node.js dependencies:
   ```sh
   npm install
   ```
2. Start the frontend server:
   ```sh
   npm run dev
   ```

### 4. WebSocket Server
- Ensure the WebSocket server is running alongside the backend.

## API Routes

### Authentication
- `POST /signup` - Register a new user
- `POST /login` - Authenticate and get a token

### Task Management
- `GET /tasks` - Fetch pending tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id/done` - Mark a task as done

