const { Router } = require("express");

// Controladores de auth
const { login, register, me } = require("../controllers/auth.controller");

// Rutas de psicólogo
const psicologoRoutes = require("./psicologo.routes");

const router = Router();

// Healthcheck
router.get("/health", (_req, res) =>
  res.json({ ok: true, service: "PsicoFound API" })
);

// Rutas de autenticación
router.get("/auth/me", me);
router.post("/auth/login", login);
router.post("/auth/register", register);

// Rutas de psicólogo
router.use("/psicologo", psicologoRoutes);

module.exports = router;
