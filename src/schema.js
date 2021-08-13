const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Image {
    icon_url: String
    medium_url: String
    screen_url: String
    screen_large_url: String
    small_url: String
    super_url: String
    thumb_url: String
    tiny_url: String
    original_url: String
    image_tags: String
  }
`;

module.exports = typeDefs;
