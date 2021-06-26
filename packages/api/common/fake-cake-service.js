const fakeCakes = [
  {
    id: 1,
    name: "Free cake",
    comments: "I like free cakes",
    yumFactor: 5,
  },
];

module.exports.fakeCakeService = {
  deleteCakeById: (id) => {
    return new Promise((resolve, reject) => {
      id === 1 ? resolve("FAKE_SUCCESS") : reject("FAKE_FAIL");
    });
  },
  getAllCakes: () => {
    return new Promise((resolve, reject) => {
      resolve(fakeCakes);
    });
  },
  addNewCake: ({ name, comments, imageUrl, yumFactor }) => {
    return new Promise((resolve, reject) => {
      yumFactor === 1 ? resolve("FAKE_SUCCESS") : reject("FAKE_FAIL");
    });
  },
};
