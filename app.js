import { ApolloServer, gql } from "apollo-server";
import { products } from "./data.js";

const typeDefs = gql`
  type Query {
    items: [String!]!
    products: [Product!]!
    product(id: String!): Product
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    items: () => {
      return null;
    },

    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      const productId = args.id;

      const product = products.find((product) => product.id === productId);
      return product;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Serving at" + url);
});
