// Controlador de autenticación (CommonJS)
// Mantiene la lógica de negocio en domains/sesion.domain.js y expone endpoints REST
const { registerUser, loginUser } = require("../domains/auth.domain");

/**
 * POST /api/auth/register
 * Body: { name, email, password, role? }
 */
async function register(req, res) {
  try {
    const data = await registerUser(req.body);
    return res.status(201).json(data);
  } catch (error) {
    const status =
      error.code || (error.message?.includes("registrado") ? 409 : 400);
    return res
      .status(status)
      .json({ message: error.message || "Error al registrar" });
  }
}

/**
 * POST /api/auth/login
 * Body: { email, password }
 */
async function login(req, res) {
  try {
    const data = await loginUser(req.body);
    return res.json(data);
  } catch (error) {
    const status = error.code || 401;
    return res
      .status(status)
      .json({ message: error.message || "Credenciales inválidas." });
  }
}

/**
 * GET /api/auth/me
 * Requiere Authorization: Bearer <token>
 * Decodifica JWT y devuelve el usuario básico (para validación de sesión al recargar la app)
 */
function me(req, res) {
  try {
    const auth = req.headers.authorization || "";
    const [, token] = auth.split(" ");
    if (!token) return res.status(401).json({ message: "No autorizado" });

    const jwt = require("jsonwebtoken");
    const payload = jwt.verify(token, process.env.JWT_SECRET || "change-me");
    return res.json({ sub: payload.sub, role: payload.role });
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

module.exports = { register, login, me };
