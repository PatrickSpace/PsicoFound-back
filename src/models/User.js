const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  nombre: { type: String, required: true },
  usuario: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [
    {
      ref: "Rol",
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],
});
module.exports = model("User", userSchema);
