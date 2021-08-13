module.exports = {
  Query: {
    videos: (_, __, { dataSources }) => dataSources.videosAPI.getVideos(),
    video: (_, { id }, { dataSources }) => dataSources.videosAPI.getVideo(id),
    currentLive: (_, __, { dataSources }) =>
      dataSources.videosAPI.getCurrentLiveVideo(),
  },
};
