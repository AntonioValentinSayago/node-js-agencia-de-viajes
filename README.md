# Ebenezer Chalco (Iglesia principe de Paz) 1.0.0

Un sistema de asistencia digital que permite registrar usuarios por categorías y tomar su asistencia escaneando un código QR. Desarrollado con React, Next.js, Node.js y MongoDB (Mongoose).

---

## 🛠️ Tecnologías Utilizadas

### Frontend:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [react-qr-reader](https://www.npmjs.com/package/react-qr-reader)

### Backend:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [qrcode](https://www.npmjs.com/package/qrcode)

---

## Getting Started

To get started with the API, follow the steps below:

### Prerequisites

- Node.js (version X.X.X or higher)
- [List any other prerequisites or dependencies]

### Installation

1. Clone this repository: `git clone https://github.com/your/repository.git`
2. Install the dependencies: `npm install`

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables:


### Running the API

To start the API, run the following command:


By default, the API will be available at `http://localhost:3000`.

## API Endpoints

The following endpoints are available in the API:

### `GET /api/users`

Returns a list of users.

### `POST /api/users`

Creates a new user.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

