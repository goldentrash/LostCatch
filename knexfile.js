require("dotenv").config();

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: "lost_catch",
  },
};
