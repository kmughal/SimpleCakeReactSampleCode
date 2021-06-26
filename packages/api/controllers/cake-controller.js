const { cakeServiceInstance } = require("../services/cake-service");

class CakeController {
  async addNewCake(req, res) {
    try {
      const { name, comment, imageUrl, yumFactor } = req.body;
      const message = await cakeServiceInstance.addNewCake({
        name,
        comment,
        imageUrl,
        yumFactor,
      });
      res.status(200).json({ message });
    } catch (e) {
      res.status(500).json("Something went wrong");
    }
  }

  async getAllCakes(req, res) {
    try {
      const contents = await cakeServiceInstance.getAllCakes();
      res.status(200).json(contents);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async deleteCakeById(req, res) {
    try {
      const { id } = req.body;
      const message = await cakeServiceInstance.deleteCakeById(id);
      res.status(200).json({ message });
    } catch (e) {
      res.status(500).send("Something went wrong.");
    }
  }
}

module.exports.cakeControllerInstance = new CakeController();
