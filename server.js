// https://graphql.org/graphql-js/running-an-express-graphql-server/

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(
'/graphql',
  graphqlHTTP({
    graphiql: true,
  }),
);

app.listen(4000, () => {
    console.log('Started the server on http://localhost:4000')
});

// why graphQL
// CRUD and REST are traditional approaches that have shortcomings
// RESTful routing can get complicated with deep nesting
// GraphQL looks at data as a graph instead relational tables
// A query in GraphQL traverses the graph