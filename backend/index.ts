import express from "express";
import { PORT } from "./env.ts";
import usersRouter from "./routes/users.ts";

const app = express();

app.use(express.json());

app.use("/api", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello From Backend!");
});

app.listen(PORT, () => console.log(`Open on ${PORT}`));
