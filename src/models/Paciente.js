const { Schema, model } = require("mongoose");

const pacienteSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },
    genero: {
      type: String,
      enum: ["Masculino", "Femenino", "Otro"],
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    antecedentes: {
      type: String,
    },
    historialClinico: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Paciente = model("Paciente", pacienteSchema);

module.exports = Paciente;
