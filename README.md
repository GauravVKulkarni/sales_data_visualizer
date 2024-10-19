# MERN Stack Coding Challenge

This project is a MERN (MongoDB, Express, React, Node.js) stack application. The backend interacts with a third-party API to fetch product transactions and store them in MongoDB, while the frontend displays transaction data in tables and charts.

## Features
- Fetch data from a third-party JSON API and seed a MongoDB database.
- API to list transactions with search and pagination.
- API for statistics (total sales, sold/not sold items).
- API for bar chart (price range vs. number of items).
- API for pie chart (category vs. number of items).
- Single-page React app that displays transaction data using these APIs.

## Technologies Used
- **Backend:** Node.js, Express, MongoDB (Atlas)
- **Frontend:** React (Vite)
- **Database:** MongoDB (Atlas)
- **API:** Third-party product transaction API

## Prerequisites
Make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB Atlas account (or MongoDB locally)
- Git

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-repository-folder>
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
- Create a `.env` file in the `backend` folder and add the following:
  ```plaintext
  MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
  PORT=5000
  ```

#### Run Backend Server
```bash
npm start
```
The backend will run on `http://localhost:5000`.

### 3. Frontend Setup

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Configure Environment Variables for React
- Create a `.env` file in the `frontend` folder and add the following:
  ```plaintext
  REACT_APP_API_URL=http://localhost:5000
  ```

#### Run Frontend (React) Application
```bash
npm run dev
```
This will start the frontend on `http://localhost:3000`.

### 4. Access the Application

- Open your browser and navigate to `http://localhost:3000`.
- You can view and interact with the transactions data via the frontend interface, which communicates with the backend APIs.

## API Endpoints

### GET /transactions
- List all transactions with pagination and search.

### GET /statistics
- Retrieve total sales, sold items, and unsold items.

### GET /barchart
- Get price range vs. the number of items.

### GET /piechart
- Get category vs. the number of items.

### GET /all-data
- Fetches and combines the results from all APIs.

## Database Setup (MongoDB Atlas)
To connect to MongoDB Atlas:
1. Go to the [MongoDB Atlas](https://cloud.mongodb.com/) website.
2. Set up a free cluster and get the connection string.
3. Use that connection string in the `.env` file in place of `<username>` and `<password>`.

## License
This project is licensed under the MIT License.