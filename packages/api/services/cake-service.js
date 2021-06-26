const { CakeModel } = require("../models");
class CakeService {
  async addNewCake({ name, comment, imageUrl, yumFactor }) {
    await CakeModel.create({ name, comment, imageUrl, yumFactor });
    const result = await CakeModel.findAll({});
    return result;
  }

  async getAllCakes() {
    const cakes = await CakeModel.findAll({});
    return cakes;
  }

  async deleteCakeById(id) {
    const result = await CakeModel.destroy({ where: { id } });
    return result;
  }
}

module.exports.cakeServiceInstance = new CakeService();