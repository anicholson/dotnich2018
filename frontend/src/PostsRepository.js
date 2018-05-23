import axios from "axios";
import localForage from "localforage";

const defaultConfig = {
  fetchUrl: "/posts.json",
  store: localForage.createInstance({
    name: "dotnich_posts"
  })
};

class PostsRepository {
  constructor({ fetchUrl, store }) {
    this.fetchUrl = fetchUrl;
    this.store = store;
  }

  all(callback) {
    return this.store.keys(callback);
  }

  async count() {
    let answer = await this.all();
    return answer.length;
  }

  async find(key) {
    let object = await this.store.getItem(key);
    return object;
  }

  async populate() {
    try {
      const response = await axios.get(this.fetchUrl);
      let posts = response.data.posts;

      posts.map(post => {
        return this.store.setItem(post.hash, post);
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export { defaultConfig };

export default PostsRepository;
