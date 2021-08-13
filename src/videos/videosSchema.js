const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Video {
    api_detail_url: String
    #associations: []
    embed_player: String
    length_seconds: String
    name: String
    premium: Boolean
    publish_date: String
    site_detail_url: String
    user: String
    hosts: String
    video_type: String
    video_show: VideoShow
    #video_categories: []
    saved_time: String
    youtube_id: String
    low_url: String
    high_url: String
    hd_url: String
    url: String
    id: String
    guid: ID!
    crew: String
    deck: String
    image: Image
  }

  type Query {
    videos: [Video]
    video(id: ID!): Video
  }
`;

module.exports = typeDefs;
