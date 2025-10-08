# User Management API Documentation

## Base URL
```
http://localhost:5000/api/users
```

## API Endpoints

### 1. Get All Users
**GET** `/api/users`

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)
- `limit` (optional): Number of users per page (default: 10)
- `search` (optional): Search term to filter users by name, email, or phone

**Example Request:**
```
GET /api/users?page=1&limit=5&search=john
```

**Response:**
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "1234567890",
        "createdAt": "2023-09-06T10:30:00.000Z",
        "updatedAt": "2023-09-06T10:30:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalUsers": 1,
      "hasNextPage": false,
      "hasPrevPage": false
    }
  }
}
```

### 2. Get User by ID
**GET** `/api/users/:id`

**Example Request:**
```
GET /api/users/64f8a1b2c3d4e5f6a7b8c9d0
```

**Response:**
```json
{
  "success": true,
  "message": "User retrieved successfully",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  }
}
```

### 3. Create User
**POST** `/api/users`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  }
}
```

### 4. Update User
**PUT** `/api/users/:id`

**Request Body (all fields optional):**
```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "phone": "0987654321"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Smith",
      "email": "johnsmith@example.com",
      "phone": "0987654321",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T11:45:00.000Z"
    }
  }
}
```

### 5. Delete User
**DELETE** `/api/users/:id`

**Example Request:**
```
DELETE /api/users/64f8a1b2c3d4e5f6a7b8c9d0
```

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "deletedUser": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  }
}
```

### 6. Delete Multiple Users
**POST** `/api/users/delete-multiple`

**Request Body:**
```json
{
  "ids": ["64f8a1b2c3d4e5f6a7b8c9d0", "64f8a1b2c3d4e5f6a7b8c9d1"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "2 user(s) deleted successfully",
  "data": {
    "deletedCount": 2
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error",
  "errors": ["Name must be at least 2 characters long"]
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "User not found"
}
```

### 409 Conflict
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error details"
}
```

## Validation Rules

### User Schema
- **name**: Required, 2-50 characters, trimmed
- **email**: Required, unique, valid email format, lowercase
- **phone**: Required, unique, valid phone number format

## Testing the API

You can test the API using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Any REST client

### Example curl commands:

```bash
# Get all users
curl -X GET http://localhost:5000/api/users

# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890"}'

# Get user by ID
curl -X GET http://localhost:5000/api/users/USER_ID

# Update user
curl -X PUT http://localhost:5000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"John Smith"}'

# Delete user
curl -X DELETE http://localhost:5000/api/users/USER_ID
```
