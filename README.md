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
  flowchart TD
  A[Client<br/>(Browser / Mobile App)] -->|HTTP Requests| B[Routes<br/>(Express Router)]

      B --> C[Controllers]
      C --> D[Services / Business Logic]
      D --> E[Models<br/>(ORM / Schema)]
      E --> F[(Database)]

      C --> G[Middlewares<br/>(Auth, Validation, Logging)]
      G --> C

      D --> H[External Services<br/>(APIs, Email, Payment)]
