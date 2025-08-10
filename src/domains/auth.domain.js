// Dominio de autenticación (CommonJS)
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function buildToken(user) {
  const payload = { sub: user._id.toString(), roles: user.roles };
  const secret = process.env.JWT_SECRET || "change-me";
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

/**
 * Crea un usuario y devuelve { user, token }
 */
async function registerUser({ nombre, usuario, password, roles }) {
  if (!nombre || !usuario || !password) throw new Error("Datos incompletos.");

  if (roles === undefined) {
    roles = [];
  }

  const exists = await User.findOne({ usuario });
  if (exists) {
    const err = new Error("El usuario ya está registrado.");
    err.code = 409;
    throw err;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    nombre,
    usuario,
    password: passwordHash,
    roles,
  });
  const token = buildToken(user);
  return {
    user: {
      id: user._id,
      nombre: user.nombre,
      usuario: user.usuario,
      roles: user.roles,
    },
    token,
  };
}

/**
 * Valida credenciales y devuelve { user, token }
 */
async function loginUser({ usuario, password }) {
  if (!usuario || !password) throw new Error("Datos incompletos.");

  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    console.log("loginUser input:", { usuario, password });
  }

  const user = await User.findOne({ $or: [{ usuario }, { email: usuario }] });

  if (!user) {
    if (!isProd) {
      console.log("User not found for usuario/email:", usuario);
    }
    throw new Error("Credenciales inválidas.");
  }

  if (!isProd) {
    console.log("Found user:", user);
  }

  let ok = false;
  if (user.password && user.password.startsWith("$2")) {
    ok = await bcrypt.compare(password, user.password);
  } else {
    if (!isProd) {
      ok = password === user.password;
    } else {
      ok = false;
    }
  }

  if (!isProd) {
    console.log("Password comparison result:", ok);
  }

  if (!ok) throw new Error("Credenciales inválidas.");

  const token = buildToken(user);
  return {
    user: {
      id: user._id,
      nombre: user.nombre,
      usuario: user.usuario,
      roles: user.roles,
    },
    token,
  };
}

module.exports = { registerUser, loginUser };
