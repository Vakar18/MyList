
# My List Feature

This project implements the "My List" feature for an OTT platform using TypeScript, Express.js, and MongoDB.

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- MongoDB

### Install dependencies

npm install

### Start the application

npm run build
npm start

### Run tests

npm test

## API Endpoints

### Add to My List

Method: POST
URL: /api/my-list/add
Body: { "userId": "string", "itemId": "string" }

### Remove from My List

Method: POST
URL: /api/my-list/remove
Body: { "userId": "string", "itemId": "string" }

### List My Items

Method: GET
URL: /api/my-list/list
Query Params: userId=string&page=number&limit=number

## Design Choices

Scalability: Using MongoDB for flexible schema and efficient querying.
Performance: Pagination for listing items to handle large lists efficiently.
Testing: Comprehensive integration tests to ensure reliability.
Deployment: CI/CD pipeline with GitHub Actions.

## Assumptions

Basic user authentication is in place.
Unique IDs for movies, TV shows, and users are provided.

## Authors

Vakar Ahmad

## Conclusion

This implementation covers all the functional requirements, including add, remove, and list items in a user's personalized list. It also includes integration tests and a CI/CD pipeline setup for automated testing and deployment. The MongoDB database ensures scalability and performance, and the documentation provides clear setup and usage instructions
