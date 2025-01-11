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

# User Login Endpoint

## Endpoint: `/users/login`

### Description

This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON response with the user details and an authentication token.

### Method

`POST`

### Request Body

The request body should be a JSON object with the following fields:

- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response

Success Response (`200 OK`):

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

Error Response (`401 Unauthorized`):

```json
{
  "message": "Invalid credentials"
}
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Description

This endpoint is used to get the profile of the authenticated user.

### Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

Success Response (`200 OK`):

```json
{
  "user": {
    "id": "12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Description

This endpoint is used to log out the authenticated user. It clears the authentication token and adds it to the blacklist to prevent further use.

### Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

Success Response (`200 OK`):

```json
{
  "message": "Logged out"
}
```

# Token Blacklist Mechanism

### Description

The token blacklist mechanism is used to invalidate a user's token upon logout, ensuring that the token cannot be used for authentication after the user has logged out.

### Implementation

1. **User Logout Request**: When a user sends a request to log out, the `logoutUser` controller function is invoked.
2. **Clear Cookie**: The server clears the token cookie from the user's browser using `res.clearCookie("token")`.
3. **Extract Token**: The token is extracted from the request's cookies or authorization header.
4. **Blacklist Token**: The extracted token is saved in the `blackListTokenModel` collection in the database.
5. **Token Expiry**: The token in the blacklist has an expiry time (24 hours in this case), after which it will be automatically removed from the database.
6. **Token Validation**: During subsequent requests, the server checks if the token is in the blacklist. If it is, the token is considered invalid, and the user is not authenticated.

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Description

This endpoint is used to register a new captain. It validates the input data, hashes the captain's password, saves the captain to the database, and returns a JSON response with the captain details and an authentication token.

### Method

`POST`

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: The captain's first name (minimum 3 characters).
  - `lastname`: The captain's last name (minimum 3 characters).
- `email`: The captain's email address (must be a valid email).
- `password`: The captain's password (minimum 6 characters).
- `vehicle`: An object containing:
  - `color`: The vehicle's color (minimum 3 characters).
  - `plate`: The vehicle's plate number (minimum 3 characters).
  - `capacity`: The vehicle's capacity (minimum 1).
  - `vehicleType`: The type of vehicle (must be one of "car", "motorcycle", "auto").

Example:

```json
{
  "fullname": {
    "firstname": "Captain1",
    "lastname": "Test"
  },
  "email": "captain@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ-1234",
    "capacity": 4,
    "vehicleType": "auto"
  }
}
```

### Response

The response will be a JSON object containing the captain details and an authentication token.

Example:

```json
{
  "captain": {
    "id": "12345",
    "fullname": {
      "firstname": "Captain1",
      "lastname": "Test"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ-1234",
      "capacity": 4,
      "vehicleType": "auto"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

# Captain Login Endpoint

## Endpoint: `/captains/login`

### Description

This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns a JSON response with the captain details and an authentication token.

### Method

`POST`

### Request Body

The request body should be a JSON object with the following fields:

- `email`: The captain's email address (must be a valid email).
- `password`: The captain's password (minimum 6 characters).

Example:

```json
{
  "email": "captain@example.com",
  "password": "securePassword123"
}
```

### Example Response

Success Response (`200 OK`):

```json
{
  "captain": {
    "id": "12345",
    "fullname": {
      "firstname": "Captain1",
      "lastname": "Test"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ-1234",
      "capacity": 4,
      "vehicleType": "auto"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error Response (`401 Unauthorized`):

```json
{
  "message": "Invalid credentials"
}
```

# Captain Profile Endpoint

## Endpoint: `/captains/profile`

### Description

This endpoint is used to get the profile of the authenticated captain.

### Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

Success Response (`200 OK`):

```json
{
  "captain": {
    "id": "12345",
    "fullname": {
      "firstname": "Captain1",
      "lastname": "Test"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ-1234",
      "capacity": 4,
      "vehicleType": "auto"
    }
  }
}
```

# Captain Logout Endpoint

## Endpoint: `/captains/logout`

### Description

This endpoint is used to log out the authenticated captain. It clears the authentication token and adds it to the blacklist to prevent further use.

### Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

Success Response (`200 OK`):

```json
{
  "message": "Logged out"
}
```
