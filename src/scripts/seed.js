// scripts/seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Role = require("../models/Role");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Crear roles si no existen
    const roles = ["patient", "psicologo", "admin"];
    for (const name of roles) {
      const exists = await Role.findOne({ name });
      if (!exists) {
        await Role.create({ name });
        console.log(`Rol creado: ${name}`);
      }
    }

    // Obtener el rol admin
    const adminRole = await Role.findOne({ name: "admin" });

    const usuario = "admin";
    const plainPassword = "admin";

    // Elimina si ya existe
    await User.deleteOne({ usuario });

    const passwordHash = await bcrypt.hash(plainPassword, 10);

    const user = await User.create({
      nombre: "Usuario Demo",
      usuario,
      password: passwordHash,
      roles: adminRole ? [adminRole._id] : [],
    });

    console.log("Usuario demo creado:");
    console.log({ usuario, password: plainPassword, roles: user.roles });

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
