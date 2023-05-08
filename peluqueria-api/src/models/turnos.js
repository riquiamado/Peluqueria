const mongoose = require("mongoose");

const TurnoSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servicio",
    required: true,
  },
  estado: {
    type: String,
    enum: ["disponible", "reservado", "cancelado"],
    default: "disponible",
  },
});

const Turno = mongoose.model("Turno", TurnoSchema);

module.exports = Turno;
