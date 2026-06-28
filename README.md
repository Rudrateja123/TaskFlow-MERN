# 🚀 TaskFlow - MERN Task Tracker

A full-stack Task Tracker web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application allows users to efficiently manage daily tasks with complete CRUD functionality, search, filtering, sorting, and task statistics through a clean and responsive interface.

---
## 🚀 Live Demo

Frontend:
https://task-flow-mern-sable.vercel.app

Backend:
https://taskflow-mern-vh2b.onrender.com

## 📸 Home Page

![TaskFlow Home](homepage)

---

## ✨ Features

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Update existing tasks
- ✅ Delete tasks
- ✅ Search tasks by title
- ✅ Filter tasks by status
- ✅ Filter tasks by priority
- ✅ Sort tasks by due date
- ✅ Task statistics dashboard
- ✅ Responsive user interface
- ✅ MongoDB Atlas integration
- ✅ RESTful API architecture
- ✅ Dynamic updates without page refresh
- ✅ Form validation
- ✅ Toast notifications

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- React Toastify
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```text
TaskFlow-MERN/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── screenshots/
│   └── homepage.png
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Rudrateja123/TaskFlow-MERN.git
cd TaskFlow-MERN
```

---

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

### 4. Configure Environment Variables

### Server (`server/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

### Client (`client/.env`)

```env
VITE_API_URL=http://localhost:5000/api
```

---

### 5. Start Backend

```bash
cd server
npm run dev
```

---

### 6. Start Frontend

```bash
cd client
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🌟 Future Improvements

- User Authentication
- Dark Mode
- Categories
- Drag & Drop Task Ordering
- Email Notifications
- Due Date Reminders

---

## 👨‍💻 Author

**Rudra Teja**

GitHub: https://github.com/Rudrateja123

---

## 📄 License

This project is created for learning and educational purposes.
