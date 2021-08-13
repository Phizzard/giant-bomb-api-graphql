module.exports = {
  Query: {
    videoShows: (_, __, { dataSources }) =>
      dataSources.videoShowsAPI.getVideoShows(),
    videoShow: (_, { id }, { dataSources }) =>
      dataSources.videoShowsAPI.getVideoShow(id),
  },
};
