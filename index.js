import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

const resolvers = {
  Query: {
    Games() {
      return db.games;
    },
    Authors() {
        return db.authors;
    },
    Reviews() {
        return db.reviews;
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
