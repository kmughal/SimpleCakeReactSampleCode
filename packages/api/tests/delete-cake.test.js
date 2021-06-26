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

describe("Delete cake test suits", () => {
  it("should delete a new cake when id is provided.", (done) => {
    request(app)
      .delete("/cake")
      .send({
        id: 1,
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .end(done);
  });

  it("should fail if service throws an error.", (done) => {
    request(app)
      .delete("/cake")
      .send({
        id: 2,
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(500)
      .end(done);
  });

  it("should fail if id is missing.", (done) => {
    request(app)
      .delete("/cake")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(500)
      .end(done);
  });
});
