module.exports = {
  Query: {
    videoCategories: (_, __, { dataSources }) =>
      dataSources.videoCategoriesAPI.getVideoCategories(),
    videoCategory: (_, { id }, { dataSources }) =>
      dataSources.videoCategoriesAPI.getVideoCategory(id),
  },
};
