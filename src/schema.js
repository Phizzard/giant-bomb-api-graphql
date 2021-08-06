const { gql } = require('apollo-server');

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type VideoShow {
  id: ID!
  guid: String
  title: String
  deck: String
  api_detail_url: String
  site_detail_url: String
}

type Query {
  videoShows: [VideoShow]
  videoShow(id: ID!): VideoShow
}
`;

module.exports = typeDefs;
