## Step by Step Build APIs With GraphQL
- `yarn global add nodemon`
- `yarn add express express-graphql`
- `yarn add graphql`
- create `server.js` file

# [Build APIs With GraphQL](https://code.tutsplus.com/courses/build-apis-with-graphql/lessons/installing-the-prerequisites)
## Instructor: [Markus Mühlberger](https://tutsplus.com/authors/markus-muehlberger?_ga=2.7570034.110113772.1595497528-1627953844.1587647269)

## Why graphQL
- CRUD and REST are traditional approaches that have shortcomings
- RESTful routing can get complicated with deep nesting
- GraphQL looks at data as a graph instead relational tables
- A query in GraphQL traverses the graph

## Schemas
- Describe the data structure
- language-agnostic schema language
- Each GraphQL document needs a schema
- A Schema defines types with fields, scalar types and query
- GraphQL is strongly-typed, each field needs a type
- The schema language is language-agnostic way to describe the structure
- Example: Star Wars Universe `type Character{
    id: String!
    name: String
    friends: [Character]
    appearsIn: [Episode]
}`
- Example: Star Wars Universe `
    type Episode {
        title: String!
        releaseDate: Date
    }
`
- Example: Star Wars Universe `
    type Query {
        hero(episode: Episode): Character
    }
`
## Queries
- REST and CRUD use well structured endpoints with HTTP verbs
- GraphQL has only one endpoints `e.g /graphql` (that handles GET and POST)
- It is expected to accept `GET` and `POST` request
- POST Request 
 - `JSON-encoded` body with query, variables and operationName
 - Content-Type `application/graphal` treats the whole body as a query
 - Queries look exactly the same, independent of the framework you are using
- Frontend Libraries
 - Lokka: simple client, that is a lightweight wrapper around fetch
 - Relay: Facebooks's GraphQL framework, very complex
 - Apollo Client: Well-made library for various JavaScript frameworks
 - Recap 
  - GraphQL service only uses one endpoints that handles GET and POST
  - GraphQL is language-agnostic, so your queries look the same everywhere
  - Use Apollo Client, if you want a good frontend library
 
## GraphiQL 
- GraphiQL is an interactive API explorer
- The Documentation Explorer generates documents form the schema 
- GraphiQL supports auto-completion and parameterized queries
- It is already included in the express-graphql package

## Topics cover
- `Create Server`
- `Schemas`
- `Queries`
- [Running an Express GraphQL Server](https://graphql.org/graphql-js/running-an-express-graphql-server/)
- [GraphQL HTTP Server Middleware](https://github.com/graphql/express-graphql)


RESTful APIs are great: they follow a resource-oriented approach that is clear and well structured. But when the data gets more and more complex, the routes get longer and longer, and sometimes it isn’t even possible to fetch the data you want with only one request. This is where GraphQL comes into play. It’s designed to work with data represented by a graph, and it has a powerful query syntax for traversing, retrieving, and mutating data.

In this course, **Markus Mühlberger** will show you how to build a back-end GraphQL API. You'll start by using an interactive demo server to explore the basics of GraphQL and the syntax. Then you'll move on to implementing your own GraphQL server—a database of information about Star Wars characters—complete with queries, custom types, mutations, and a number of other advanced GraphQL features.


## Source Files Description

The source files contains the examples that are created during the course. The first commit is the starter project.

------


