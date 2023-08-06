const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');


const app = express();
const port = process.env.PORT || '5000';

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: null,
    rootValue: {}
}));

// app.get("/", (req, res, next) => {
//     res.send("Hello World !");
// });

app.listen(port);

