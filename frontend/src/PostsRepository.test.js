import moxios from "moxios";
import PostsRepository from "./postsRepository";
import { equal } from "assert";
import sinon from "sinon";

const stubResponse = JSON.stringify({
  posts: [
    {
      title: "hello",
      hash: "cafebabe1"
    },
    {
      title: "world",
      hash: "deadbeef"
    }
  ]
});

describe("PostsRepository", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("#populate()", () => {
    it("fetches data from the fetchUrl", done => {
      let stubUrl = "/stubUrl";
      moxios.withMock(() => {
        let repo = new PostsRepository({
          fetchUrl: stubUrl,
          store: { setItem: sinon.spy() }
        });

        let onFulfilled = sinon.spy();

        moxios.stubRequest(stubUrl);
        repo.populate().then(onFulfilled);

        moxios.wait(() => {
          let request = moxios.requests.mostRecent();

          request
            .respondWith({
              status: 200,
              response: stubResponse
            })
            .then(() => {
              equal(onFulfilled.called, true);
              let data = onFulfilled.lastCall.args[0].data.posts;
              equal(data.length, 2);

              done();
            });
        });
      });
    });

    it("populates the store", done => {
      let stubUrl = "/stubUrl";
      let store = {
        setItem: sinon.spy()
      };

      moxios.withMock(() => {
        let repo = new PostsRepository({
          fetchUrl: stubUrl,
          store: store
        });

        let onFulfilled = sinon.spy();

        moxios.stubRequest(stubUrl);
        repo.populate().then(onFulfilled);

        moxios.wait(() => {
          let request = moxios.requests.mostRecent();

          request
            .respondWith({
              status: 200,
              response: stubResponse
            })
            .then(() => {
              equal(onFulfilled.called, true);
              equal(store.setItem.callCount, 2);
              done();
            });
        });
      });
    });
  });

  describe("#all", () => {
    let store = {
      all: sinon.spy()
    };

    let repo = new PostsRepository({
      store: store
    });

    it("fetches data from the local store", done => {
      repo.all();
      equal(store.all.callCount, 1);
      done();
    });
  });
});
