import { Sequelize } from "sequelize";
const db = new Sequelize("jago", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
