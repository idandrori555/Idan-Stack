import express from "express";
import { PORT } from "./env.ts";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Backend!");
});

app.listen(PORT, () => console.log(`Open on ${PORT}`));
