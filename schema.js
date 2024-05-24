export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!,
    platform: [String!]!
}

type Review {
    id: ID!
    rating: Int!
    content: String!,
}

type Author {
    id: ID!
    name: String!,
    verified: Boolean!
}

type Query {
    Games: [Game]
    Reviews: [Review]
    Authors: [Author]
}
`;
