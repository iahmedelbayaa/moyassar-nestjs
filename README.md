# Moyassar-NestJS

This is a **NestJS** application that integrates with the **Moyassar** API, a payment gateway for managing payments and related services. The project demonstrates how to use **Moyassar** in a backend API built with NestJS.

## Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Endpoints](#endpoints)
- [License](#license)

---

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/iahmedelbayaa/moyassar-nestjs.git
cd moyassar-nestjs
```

### Step 2: Install dependencies

Install the required dependencies by running:

```bash
npm install
```

### Step 3: Setup `.env`

Make sure you have the `.env` file in your root directory to store your environment variables, such as the Moyassar API key.

Example `.env` file:

```plaintext
MOYASSAR_API_KEY=your_moyassar_api_key
```

---

## Environment Setup

The application relies on the `MOYASSAR_API_KEY` for authentication with the Moyassar API. You can set this value in the `.env` file as shown above.

Make sure to install and configure `@nestjs/config` to load the `.env` file as shown in the service and controller examples.

---

## Running the Application

Once everything is set up, you can start the application using the following command:

```bash
npm run start
```

This will run the application on `http://localhost:3000` by default.

---

## Testing

To run the tests for the application:

```bash
npm run test
```

Tests are written using Jest. Make sure that your application is set up correctly with the necessary mock services before running the tests.

---

## Endpoints

Here are the primary endpoints exposed by the application:

### 1. Create Payment

- **Method**: `POST`
- **Route**: `/payments/create`
- **Body**:
  ```json
  {
    "amount": 100,
    "currency": "USD"
  }
  ```
- **Description**: This endpoint creates a payment via the Moyassar API.

### 2. Get Payment Info

- **Method**: `GET`
- **Route**: `/payments/:id`
- **Parameters**: `id` (Payment ID)
- **Description**: Retrieves the payment details from Moyassar using the payment ID.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
