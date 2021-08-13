const { RESTDataSource } = require("apollo-datasource-rest");

class VideosAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://www.giantbomb.com/api/";
  }

  willSendRequest(request) {
    request.params.set("api_key", process.env.API_KEY);
    request.params.set("format", "json");
  }

  async getCurrentLiveVideo() {
    const data = await this.get(`video/current-live`);
    return data.video;
  }

  async getVideo(guid) {
    const data = await this.get(`video/${guid}`);
    return data.results;
  }

  async getVideos(limit = 10) {
    const data = await this.get("videos", {
      limit,
      sort: "publish_date:desc",
    });
    return data.results;
  }
}

module.exports = {
  VideosAPI,
};
