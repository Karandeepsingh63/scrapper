# News MERN App

A full-stack MERN application that scrapes the top stories from  News and allows authenticated users to bookmark stories.

---

# Features

* Scrape top 10 stories from Hacker News
* Store scraped stories in MongoDB
* JWT Authentication (Register/Login)
* View all stories sorted by points
* Bookmark / Unbookmark stories
* Protected bookmarks page
* Pagination support
* React Context API for authentication state management
* Responsive frontend with React

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* Context API
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* BcryptJS
* Axios
* Cheerio

---

# Project Structure

```bash
root/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

git clone Scrapper
cd Scrapper

---

# Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create .env file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run backend server

```bash
npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Create .env file

```env
VITE_API_URL=http://localhost:5000/api
```

## Run frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Scraper API

### Scrape Hacker News Stories

```http
POST /api/scrape
```

---

## Story APIs

### Get All Stories

```http
GET /api/stories
```

### Pagination Example

```http
GET /api/stories?page=1&limit=10
```

### Get Single Story

```http
GET /api/stories/:id
```

### Toggle Bookmark

```http
POST /api/stories/:id/bookmark
```

Requires Authentication Token.

### Get All Bookmarked Stories

```http
GET /api/stories/bookmarks/all
```

Requires Authentication Token.

---

# Authentication

JWT-based authentication is implemented.

Protected routes require token in headers:

```http
Authorization: Bearer your_token_here
```

---

# Web Scraper Details

The scraper:

* Fetches data from Hacker News
* Extracts:
  * Title
  * URL
  * Points
  * Author
  * Posted Time
* Saves stories in MongoDB
* Runs automatically on server start
* Can also be triggered manually using API

---

# Bookmark System

Users can:

* Bookmark stories
* Remove bookmarks
* View bookmarked stories on protected page

Bookmarks are stored in MongoDB using ObjectId references.

---

# Environment Variables

## Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

## Frontend

```env
VITE_API_URL=
```

---

# Future Improvements

* Better UI styling
* Search functionality
* Dark mode
* Infinite scrolling
* Refresh scraper automatically using cron jobs
* User profile page

---

# Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Render

---
