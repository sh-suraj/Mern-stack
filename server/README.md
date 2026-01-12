## javascript

- Programming Language
- High level, interpreted, multi-paradigm, dynamic
- Built on c++
- node.js used to build APIs
- used to build frontend web pages (add interactivity)

# Node.js:

- It is js runtime
- helps to run js in local machine/server.
- built using c++
- uses google chrome v8 engine to compile js.
- used to build API's, microservices, server side program, CLI

# Architecture

- single threaded, event driven architecture
- extremely fast even for a single threaded architecture
- Non-blocking I/O Operations

- flowchart TD
  A[Client (Browser / Mobile App)] -->|HTTP Requests| B[Routes (Express Router)]

      B --> C[Controllers]
      C --> D[Services / Business Logic]
      D --> E[Models (ORM / Schema)]
      E --> F[Database]

      C --> G[Middlewares(Auth, Validation, Logging)]
      G --> C

      D --> H[External Services(APIs, Email, Payment)]

# HTTP Methods

**// same for all languages able to make API**

- GET : **used to read/fetch data**
- POST : **used to add/create data**
- PUT : **used to update data**
- DELETE : **used to Delete data**
- PATCH (optional) : **used for partial update**
  //can be used PUT instead of PATCH

## HTTP Status Codes

### 1. 1xx – information

### 2. 2xx – Success

| Status Code | Meaning                                    |
| ----------- | ------------------------------------------ |
| 200         | OK – Request successful                    |
| 201         | Created – Resource created successfully    |
| 204         | No Content – Success with no response body |

### 3. 4xx – Client Errors

| Status Code | Meaning                                 |
| ----------- | --------------------------------------- |
| 400         | Bad Request – Invalid request data      |
| 401         | Unauthorized – Authentication required  |
| 403         | Forbidden – Access denied               |
| 404         | Not Found – Resource not found          |
| 405         | Method not allowed                      |
| 409         | Conflict – Request conflict             |
| 422         | Unprocessable Entity – Validation error |

### 4. 5xx – Server Errors

| Status Code | Meaning                                         |
| ----------- | ----------------------------------------------- |
| 500         | Internal Server Error – Server failure          |
| 503         | Service Unavailable – Server overloaded or down |
| 504         | Timeout – Server timeout due to overload        |

# semantic coding

- Files and Folder structure
- Files and Folder naming
- Function and variable naming

# API Folder Structure

root/

- package.json
- .env
- .gitignore
- node_modules/
- src/
  - server.js
  - app.js
  - routes/
    - authRoutes.js
  - services/
    - authServices.js
  - models/
    - auth.js
  - controllers/
    - authController.js
  - middleware/
    - authMiddleware.js
  - utils/
    - wtAuth.js
  - lib/
    - userType.js
  - helpers/
    - dataFormatter.js
  - constants/
    - roles.js
  - db/
    - db.js
