const express = require("express");
const path = require("path");
// const db = require("./config/connection");
const routes = require("./routes");
const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers.js");
const cors = require("cors");
const { json } = require("body-parser");

const { ApolloServer } = require("@apollo/server");
import { startStandaloneServer } from "@apollo/server/standalone";
const { authMiddleware } = require("../utils/auth");

const { expressMiddleware } = require("@apollo/server/express4");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
startStandaloneServer(server, {
  // Note: This example uses the `req` argument to access headers,
  // but the arguments received by `context` vary by integration.
  // This means they vary for Express, Fastify, Lambda, etc.

  // For `startStandaloneServer`, the `req` and `res` objects are
  // `http.IncomingMessage` and `http.ServerResponse` types.
  context: authMiddleware,
}).then(() => {
  server.start().then(() => {
    app.use("/graphql", cors(), json(), expressMiddleware(server));
  });
});

// // if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);

// db.once("open", () => {
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
