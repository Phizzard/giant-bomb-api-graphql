const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type VideoCategory {
    api_detail_url: String
    deck: String
    id: ID!
    name: String
    image: Image
    site_detail_url: String
  }

  type Query {
    videoCategories: [VideoCategory]
    videoCategory(id: ID!): VideoCategory
  }
`;

module.exports = typeDefs;
