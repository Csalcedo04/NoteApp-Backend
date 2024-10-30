# NoteApp Backend

This repository contains the backend for the NoteApp, a web application that allows users to create, retrieve, and delete notes.

## Features

- Add new notes with a title and content
- Retrieve all notes
- Delete notes by ID

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Docker

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Csalcedo04/NoteApp-Backend.git
   cd NoteApp-Backend
   ```

2. Build the Docker containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application at `http://localhost:3000`.

### Database Setup

The PostgreSQL database is set up and configured in a Docker container. The application will automatically create the necessary tables upon starting.

### API Endpoints

- **POST /noteapp**: Create a new note
  - Request Body:
    ```json
    {
      "id": "number",
      "title": "string",
      "content": "string"
    }
    ```

- **GET /noteapp**: Retrieve all notes
- **DELETE /noteapp/:id**: Delete a note by ID

## Usage

You can interact with the API using tools like Postman or CURL to test the various endpoints.

## Contributing

Feel free to fork the repository and submit pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License.

## Author
Carlos Alberto Salcedo Rodriguiez
