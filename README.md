# WTLAB
Lab work
- Ecommerce
- Learning platform
- job reqruitment
- blog
- social media/twitter

MySQL
React
Node.js

## Basic commands 

Node 

``` 
mkdir ecommerce-backend
cd ecommerce-backend
npm init -y

npm install express mysql2 bcryptjs jsonwebtoken cors body-parser
```

React

```
npx create-react-app ecommerce-frontend
npm install axios react-router-dom
```

Database

```
CREATE DATABASE ecommerce_db;
USE ecommerce_db;

```

## Structures and initial tables

1. Directory Structure
Backend (Node.js)
```
ecommerce-backend/
│
├── controllers/            # Business logic for routes
│   ├── authController.js
│   ├── cartController.js
│   └── orderController.js
│
├── models/                 # Database connection and schema
│   ├── db.js               # Database connection setup
│   └── user.js
│
├── routes/                 # Routes for API endpoints
│   ├── authRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── server.js               # Main server file
└── .env                    # Environment variables
```

Frontend (React)
```
ecommerce-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── ProductList.js
│   │   └── Signup.js
│   │
│   ├── pages/               # Page components for routes
│   │   ├── HomePage.js
│   │   ├── ProductPage.js
│   │   └── ProfilePage.js
│   │
│   ├── services/            # API calls
│   │   ├── authService.js
│   │   └── productService.js
│   │
│   ├── App.js               # Main App component with routing
│   ├── index.js             # Entry point
│   └── App.css              # Basic styling
└── .env                     # Environment variables for frontend
```

2. Database Schema (MySQL)
Here is the schema for the main tables used in this e-commerce platform:

1. Users Table
Stores user information.

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. Products Table
Stores information about products.

```
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. Cart Table
Stores products added to the user's cart.

```
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
```
4. Orders Table
Stores information about orders placed by users.
```
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    products JSON,
    total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Completed', 'Canceled') DEFAULT 'Pending',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

