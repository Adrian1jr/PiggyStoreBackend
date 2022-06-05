const express = require("express");
const router = express.Router();

const {
  getArticulos,
  getArticuloById,
  postArticulo,
  putArticulo,
  deleteArticulo,
} = require("../controllers/articulos");

router.get("/", getArticulos);
router.get("/:id", getArticuloById);
router.post("/", postArticulo);
router.put("/:id", putArticulo);
router.delete("/:id", deleteArticulo);

module.exports = router;
