const mongoose = require("mongoose");

const UsuarioScheme = new mongoose.Schema(
  {
    usuario: {
      type: String,
    },
    contrasena: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(ret) {
        delete ret.__v;
        ret.uid = ret._id;
        delete ret._id;
      },
    },
  }
);

module.exports = mongoose.model("usuarios", UsuarioScheme);
