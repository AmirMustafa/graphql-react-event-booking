const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


const app = express();
const port = process.env.PORT || '5000';

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
      type RootQuery {
        events: [String!]!
      }
  
      type RootMutation {
        createEvent(name: String): String
      }
  
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {}
}));


// app.get("/", (req, res, next) => {
//     res.send("Hello World !");
// });

app.listen(port);

