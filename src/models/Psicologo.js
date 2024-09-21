const { Schema, model } = require("mongoose");
const psicologoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    especialidad: { type: String, required: true },
    experiencia: { type: Number, required: true },
    ubicacion: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Psicologo", psicologoSchema);
