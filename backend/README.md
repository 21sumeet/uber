# User Registration Endpoint

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user. It validates the input data, hashes the user's password, saves the user to the database, and returns a JSON response with the user details and an authentication token.

### Method

`POST`

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 2 characters).
  - `lastname`: The user's last name (minimum 2 characters).
- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

The response will be a JSON object containing the user details and an authentication token.

Example:

```json
{
  "user": {
    "id": "12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
