const yup = require("yup");

module.exports.deleteCakeRequestValidator = async (req, res, next) => {
  const schema = yup.object().shape({
    id: yup.number().required(),
  });
  try {
    const validatorResult = await schema.isValid(req.body);
    if (!validatorResult) throw "validation failed";
    await next();
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
};
