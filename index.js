const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    items: [String]
    isTrue: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hi iam abhiram !";
    },

    items: () => {
      return ["Items", "New items"];
    },
    isTrue: () => {
      return false;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at" + url);
});
