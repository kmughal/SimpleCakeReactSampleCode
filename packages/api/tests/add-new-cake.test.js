const request = require("supertest");
const { app } = require("../common/mock-express");

jest.mock("../services/cake-service.js", () => {
  return {
    cakeServiceInstance: {
      deleteCakeById: (id) => {
        return new Promise((resolve, reject) => {
          id === 1 ? resolve("FAKE_SUCCESS") : reject("FAKE_FAIL");
        });
      },
      getAllCakes: () => {
        return new Promise((resolve, reject) => {
          resolve([
            {
              id: 1,
              name: "Free cake",
              comments: "I like free cakes",
              yumFactor: 5,
            },
          ]);
        });
      },
      addNewCake: ({ name, comments, imageUrl, yumFactor }) => {
        return new Promise((resolve, reject) => {
          yumFactor === 1 ? resolve("FAKE_SUCCESS") : reject("FAKE_FAIL");
        });
      },
    },
  };
});

describe("Add new cake test suits", () => {
  it("should add a new cake when all parameters are provided", (done) => {
    request(app)
      .post("/cake")
      .send({
        name: "another cake",
        comment: "i like this cake",
        imageUrl: "image will be here",
        yumFactor: 1,
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("FAKE_SUCCESS");
      })
      .end(done);
  });

  it("should fail when name is missing", (done) => {
    request(app)
      .post("/cake")
      .send({
        comment: "i like this cake",
        imageUrl: "image will be here",
        yumFactor: "5",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(500)
      .end(done);
  });

  it("should fail when comment is missing", (done) => {
    request(app)
      .post("/cake")
      .send({
        name: "another cake",
        imageUrl: "image will be here",
        yumFactor: "5",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(500)
      .end(done);
  });

  it("should fail when yumFactor is missing", (done) => {
    request(app)
      .post("/cake")
      .send({
        name: "another cake",
        imageUrl: "image will be here",
        comment: "fake comment",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(500)
      .end(done);
  });

  it("should fail if service throws error", (done) => {
    request(app)
      .post("/cake")
      .send({
        name: "another cake",
        comment: "i like this cake",
        imageUrl: "image will be here",
        yumFactor: 2,
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect((response) => {
        expect(response.status).toBe(500);
        expect(response.body).toBe("Something went wrong");
      })
      .end(done);
  });
});
