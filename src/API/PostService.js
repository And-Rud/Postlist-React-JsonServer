import axios from "axios";

export default class POstService {
  static async getAll(limit = 5, page = 1) {
    let res = await axios.get("http://localhost:4000/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return res.data;
  }

  static async getById(id) {
    console.log(id);
    let res = await axios.get("http://localhost:4000/posts/" + id);
    return res;
  }

  static async getCommentById(id) {
    console.log(id);
    let res = await axios.get(`http://localhost:4000/posts/${id}/comments`);
    return res;
  }
}
