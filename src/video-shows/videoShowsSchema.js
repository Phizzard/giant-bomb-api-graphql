const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type VideoShow {
    api_detail_url: String
    deck: String
    id: ID!
    guid: String
    title: String
    position: String
    image: Image
    logo: Image
    latest: [Video]
    premium: Boolean
    site_detail_url: String
  }

  type Query {
    videoShows: [VideoShow]
    videoShow(id: ID!): VideoShow
  }
`;

module.exports = typeDefs;
