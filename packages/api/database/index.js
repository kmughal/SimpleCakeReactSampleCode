const { Sequelize } = require("sequelize");

const _sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    logging: true,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 20000,
      idle: 10000,
    },
  }
);

const _establishConnection = async () => {
  try {
    await _sequelize.authenticate();
    await _sequelize.sync({ force: true });
    console.log("=== postgres connected successfully ===");
    return _sequelize;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

exports.connect = _establishConnection;
exports.sequelize = _sequelize;
