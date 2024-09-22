const { Schema, model } = require("mongoose");

const HorarioSchema = new Schema(
  {
    estado: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: Date, required: true },
    psicologo: { type: Schema.Types.ObjectId, ref: "Psicolgo", required: true },
  },
  {
    timestamps: true,
  }
);

const Horario = model("Horario", HorarioSchema);
module.exports = Horario;
