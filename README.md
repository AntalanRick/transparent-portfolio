# Transparent Portfolio - API Integration

## What It Does
A REST API built with Node.js and Express for managing portfolio items.

## Setup and Run

1. npm install
2. node server.js
3. Server runs at http://localhost:3000

## Endpoints

### GET /api/portfolio
Returns all portfolio items.

Request:  GET http://localhost:3000/api/portfolio
Response: [{ title: My Portfolio, description: API integration }]

### POST /api/portfolio
Adds a new item. title is required.

Request:  POST http://localhost:3000/api/portfolio
Body:     { title: My Portfolio, description: API integration }

Response 200: { message: Portfolio added }
Response 400: { message: Title is required }
