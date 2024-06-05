# chat-app.

## Overview

This repository contains the code for a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional features like Socket.io for real-time communication and JWT for authentication and authorization. The application is deployed on Render.

## Features

- **Tech Stack**: MERN, Socket.io, TailwindCSS, DaisyUI
- **Authentication & Authorization**: Implemented using JWT
- **Real-Time Messaging**: Powered by Socket.io
- **Online User Status**: Managed with Socket.io and React Context
- **Global State Management**: Using Zustand
- **Error Handling**: Implemented on both server and client sides
- **Deployment**: Deployed on Render

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- MongoDB database

### Clone the Repository

```sh
git clone https://github.com/burakorkmez/mern-chat-app.git
cd mern-chat-app
```

### Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=YOUR_PORT
MONGO_DB_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_JWT_SECRET
NODE_ENV=development
```

### Install Dependencies

Navigate to both `backend` and `frontend` directories and install dependencies:

```sh
cd backend
npm install
cd ../frontend
npm install
```

### Build the App

From the `frontend` directory:

```sh
npm run build
```

### Start the App

Navigate to the `backend` directory and start the server:

```sh
npm start
```

## Folder Structure

- **backend**: Contains the backend code (Express.js, MongoDB, JWT, Socket.io)
- **frontend**: Contains the frontend code (React.js, Zustand, TailwindCSS, DaisyUI)
- **.gitignore**: Specifies files to be ignored by Git
- **LICENSE**: MIT license information
- **README.md**: Project documentation
- **package.json**: Project metadata and dependencies

## Usage

1. Open your browser and navigate to `http://localhost:YOUR_PORT`
2. Register or log in using your credentials
3. Start chatting in real-time

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please open an issue on this repository.

## Links

- [GitHub Repository](https://github.com/OukoFranchez/chat-app)
- [Deployed App on Render](https://your-render-url.com)

---


