const { Schema, model } = require("mongoose");
const psicologoSchema = new Schema(
  {
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },
    genero: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    especialidad: { type: String, required: true },
    aniosexperiencia: { type: Number, required: true },
    ubicacion: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Psicologo", psicologoSchema);
