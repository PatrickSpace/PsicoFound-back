const { Schema, model } = require("mongoose");

const TerapiaSchema = new Schema({
  estado: { type: String, required: true },
  dia: { type: String, required: true },
  conclusion: { type: String, required: true },
  fechainicio: { type: Date, required: true },
  fechafin: { type: Date, required: true },
  fechainicio: { type: Date, required: true },
});

const Terapia = model("Terapia", TerapiaSchema);
module.exports = Terapia;
