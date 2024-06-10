import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import Users from "./model/usermodel.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("konek");
} catch (error) {
  console.error(error);
}

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log("Server is up and listening on " + PORT);
});

// app.listen(8000, () => console.log("server 8000"));
