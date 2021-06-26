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

describe("Get all cakes test suits", () => {
  it("should return list of cakes", (done) => {
    request(app)
      .get("/cakes")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
          {
            id: 1,
            name: "Free cake",
            comments: "I like free cakes",
            yumFactor: 5,
          },
        ]);
      })
      .end(done);
  });
});
