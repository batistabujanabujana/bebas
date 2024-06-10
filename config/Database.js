import { Sequelize } from "sequelize";
const db = new Sequelize("bisa", "root", "root", {
  host: "34.101.211.3",
  dialect: "mysql",
});

export default db;
