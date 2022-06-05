const { articulosModel } = require("../models");

const getArticulos = async (req, res) => {
  const { body } = req;
  const data = await articulosModel.find(body);
  res.send({ ok: true, results: data });
};

const getArticuloById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await articulosModel.findById(id);

    if (!data) {
      res.status(404).send({ message: "No se encontro el articulo" });
    }

    res.send({ ok: true, results: data });
  } catch (error) {
    res.status(500).send({ ok: false, message: "Error en el servidor" });
  }
};

const postArticulo = async (req, res) => {
  const { body } = req;

  try {
    const data = await articulosModel.create(body);

    if (!data) {
      res.status(404).send({ message: "No pudo completarse el registro" });
    }

    res.send({ ok: true, results: data });
  } catch (error) {
    res.status(500).send({ ok: false, message: "Error en el servidor" });
  }
};

const putArticulo = async (req, res) => {
  const { id } = req.params;
  const { ...datos } = req.body;

  try {
    const item = await articulosModel.findOne({ _id: id });

    if (!item) {
      return res
        .status(404)
        .json({ ok: false, msg: "No existe un articulo con ese id" });
    }

    await articulosModel.updateOne({ _id: id }, { $set: datos });

    const itemUpdated = await articulosModel.findOne({ _id: id });

    res.json({ ok: true, msg: "Articulo actualizado", results: itemUpdated });
  } catch (error) {
    return res.status(400).json({
      msg: `No se Puede actualizar la informacion en la base de datos ${error}`,
    });
  }
};

const deleteArticulo = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await articulosModel.findOne({ _id: id });

    if (!item) {
      return res
        .status(404)
        .json({ ok: false, msg: "No existe un articulo con ese id" });
    }

    await articulosModel.deleteOne({ _id: id });

    res.json({ ok: true, msg: "Articulo eliminado" });
  } catch (error) {
    return res.status(400).json({
      msg: `No se Puede eliminar la informacion en la base de datos ${error}`,
    });
  }
};

module.exports = {
  getArticulos,
  getArticuloById,
  postArticulo,
  putArticulo,
  deleteArticulo,
};
