const { RESTDataSource } = require("apollo-datasource-rest");

class VideoCategoriesAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://www.giantbomb.com/api/";
  }

  willSendRequest(request) {
    request.params.set("api_key", process.env.API_KEY);
    request.params.set("format", "json");
  }

  async getVideoCategory(id) {
    const data = await this.get(`video_category/${id}`);
    return data.results;
  }

  async getVideoCategories(limit = 10) {
    const data = await this.get("video_categories", {
      limit,
      sort: "name:asc",
    });
    return data.results;
  }
}

module.exports = {
  VideoCategoriesAPI,
};
