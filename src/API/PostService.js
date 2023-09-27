import axios from "axios";

export default class PostService {
  static async getAll(limit = 5, page = 1) {
    let res = await axios.get("http://localhost:4000/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return res.data;
  }
}
