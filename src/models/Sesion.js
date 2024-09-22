const { Schema, model } = require("mongoose");

const SesionSchema = new Schema(
  {
    notas: { type: String, required: true },
    avance: { type: String, required: true },
    herramientas: { type: String, required: true },
    tipo: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: Date, required: true },
    terapia: { type: Schema.Types.ObjectId, ref: "Terapia", required: true },
  },
  {
    timestamps: true,
  }
);

const Sesion = model("Sesion", SesionSchema);
module.exports = Sesion;
