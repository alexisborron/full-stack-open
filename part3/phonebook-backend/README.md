# Phonebook App

A full-stack web application developed during Full Stack Open (Parts 2 & 3). This project demonstrates the integration of a React frontend with a Node.js/Express backend.

## Live Preview

The application is deployed at: https://phonebook-lic4.onrender.com/

## Technical Overview

This project focuses on the communication between the client and the server using RESTful principles.

- **Frontend:** React (Hooks, Axios for API requests)
- **Backend:** Node.js, Express, Morgan (HTTP request logger)
- **Data Persistence:** In-memory storage (MongoDB integration coming soon)
- **Deployment:** Production build served via Render

## Key Features

- **Search Filtering**: Filter the displayed list of contacts by name in real-time
- **Contact Management**: Add new entries and delete existing ones with instant UI updates
- **Validation**: Server-side validation prevents duplicate names and missing fields
- **REST API**: A custom-built backend that handles GET, POST, and DELETE requests with proper HTTP status codes
- **Request Logging**: Morgan middleware logs all HTTP requests with custom formatting for POST requests
- **Production Deployment**: The frontend is built and served as static files by the Express backend
- **Error Handling**: Comprehensive validation and error messages for user actions

## API Endpoints

- `GET /api/persons` - Fetch all contacts
- `GET /api/persons/:id` - Fetch a single contact by ID
- `POST /api/persons` - Add new contact
  - Required fields: `name`, `number`
  - Returns 400 if name/number is missing or name already exists
- `DELETE /api/persons/:id` - Delete a contact (returns 204)
- `GET /info` - Display phonebook info (total entries and timestamp)

## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/alexisborron/phonebook-backend.git
   cd phonebook-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   ```

   The server runs on `http://localhost:3001`

4. **Run in production mode**
   ```bash
   npm start
   ```

**Note:** The frontend is pre-built and served from the `/dist` directory. The entire application runs on port 3001.

## What I Learned

Through building this project, I gained hands-on experience with:

- Building RESTful APIs with Express
- Managing application state in React with hooks
- HTTP request methods (GET, POST, DELETE) and status codes (200, 204, 400, 404)
- Middleware configuration (Morgan for logging, CORS, JSON parsing, static file serving)
- Custom Morgan tokens for logging request bodies
- Client-server communication with Axios
- Server-side validation (duplicate checking, required fields)
- Deploying full-stack applications to production (Render)
- Serving React apps from an Express backend
- Environment variables for port configuration
- Error handling on both frontend and backend
- Node.js watch mode for development

## Future Enhancements

- [ ] MongoDB integration for persistent data storage
- [ ] Update functionality for existing contacts
- [ ] Input validation and error handling improvements
- [ ] User authentication
- [ ] Duplicate name/number checking

## Technologies Used

**Frontend:**

- React 19
- Axios
- Vite

**Backend:**

- Node.js
- Express
- Morgan (HTTP request logger)

**Development:**

- REST Client (VS Code extension for API testing)
- Node.js watch mode

## License

This project is part of the Full Stack Open course by the University of Helsinki.
