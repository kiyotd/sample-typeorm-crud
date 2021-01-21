// import "reflect-metadata";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import userRoutes from "./routes/user.routes";

const PORT = 3000;

const app = express();
createConnection();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

//routes
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
