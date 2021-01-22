// import "reflect-metadata";

import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import userRoutes from "./routes/user.routes";

const PORT: number = 3000;

const app: Express = express();
createConnection();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

//routes
app.use(userRoutes);

app.listen(PORT, (): void => {
  console.log(`http://localhost:${PORT}/`);
});
