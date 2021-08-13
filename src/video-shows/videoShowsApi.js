const { RESTDataSource } = require("apollo-datasource-rest");

class VideoShowsAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://www.giantbomb.com/api/";
  }

  willSendRequest(request) {
    request.params.set("api_key", process.env.API_KEY);
    request.params.set("format", "json");
  }

  async getVideoShow(guid) {
    const data = await this.get(`video_show/${guid}`);
    return data.results;
  }

  async getVideoShows(limit = 10) {
    const data = await this.get("video_shows", {
      limit,
      sort: "latest:desc",
    });
    return data.results;
  }
}

module.exports = {
  VideoShowsAPI,
};
