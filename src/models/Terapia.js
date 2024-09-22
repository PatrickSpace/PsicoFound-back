const { Schema, model } = require("mongoose");

const TerapiaSchema = new Schema(
  {
    estado: { type: String, required: true },
    dia: { type: String, required: true },
    conclusion: { type: String, required: true },
    fechainicio: { type: Date, required: true },
    fechafin: { type: Date, required: true },
    fechainicio: { type: Date, required: true },
    paciente: { type: Schema.Types.ObjectId, ref: "Paciente", required: true },
    psicologo: {
      type: Schema.Types.ObjectId,
      ref: "Psicologo",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Terapia = model("Terapia", TerapiaSchema);
module.exports = Terapia;
