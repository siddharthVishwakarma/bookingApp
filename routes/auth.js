import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is auth page");
});

router.get("/register", (req, res) => {
  res.send("This is auth and register endpoint");
});

export default router;
