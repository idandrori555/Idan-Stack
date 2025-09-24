import { Router } from "express";

const router = Router();

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

router.get("/users", (req, res) => {
  res.json(users);
});

export default router;
