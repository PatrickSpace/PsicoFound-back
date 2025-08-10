const express = require("express");
const router = express.Router();
const psicologoController = require("../controllers/psicologo.controller");

router.get("/", psicologoController.findall);
router.get("/:id", psicologoController.findById);
router.post("/", psicologoController.create);
router.put("/", psicologoController.updated);
router.delete("/", psicologoController.delete);

module.exports = router;
