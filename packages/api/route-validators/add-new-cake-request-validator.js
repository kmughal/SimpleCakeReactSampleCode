const yup = require("yup");

module.exports.addNewCakeRequestValidator = async (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required().max(30),
    comment: yup.string().required().max(200),
    imageUrl: yup.string().required(),
    yumFactor: yup.number().required().min(1).max(5),
  });
  try {
    const validatorResult = await schema.isValid(req.body);
    if (!validatorResult) throw "validation failed";
    await next();
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
};
