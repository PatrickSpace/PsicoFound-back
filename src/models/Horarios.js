const { Schema, model } = require("mongoose");

const HorarioSchema = new Schema({
  estado: { type: String, required: true },
  fecha: { type: Date, required: true },
  hora: { type: Date, required: true },
});

const Horario = model("Horario", HorarioSchema);
module.exports = Horario;
