const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers.js");
const cors = require("cors");

const { ApolloServer } = require("@apollo/server");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await server.start();

app.use("/graphql", cors(), express.json(), expressMiddleware(server));

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.use(routes);

// db.once("open", () => {
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
