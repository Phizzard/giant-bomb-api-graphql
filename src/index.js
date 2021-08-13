require("dotenv").config();

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const videosTypeDefs = require("./videos/videosSchema");
const videoShowsTypeDefs = require("./video-shows/videoShowsSchema");

const { VideoShowsAPI } = require("./video-shows/videoShowsApi");
const { VideosAPI } = require("./videos/videosApi");

const videoShowsResolvers = require("./video-shows/videoShowsResolvers");
const videosResolvers = require("./videos/videosResolvers");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [typeDefs, videosTypeDefs, videoShowsTypeDefs],
  resolvers: [videoShowsResolvers, videosResolvers],
  dataSources: () => ({
    videoShowsAPI: new VideoShowsAPI(),
    videosAPI: new VideosAPI(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
