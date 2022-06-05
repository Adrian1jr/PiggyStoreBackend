const mongoose = require("mongoose");

const ArticulosScheme = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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

module.exports = mongoose.model("articulos", ArticulosScheme);
