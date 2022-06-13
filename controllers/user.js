const { userModule } = require("../models");

const login = async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const userInfo = await userModule.findOne({ where: { usuario: usuario } });

    if (!userInfo) {
      return res.status(400).json({
        message: "Usuario no encontrado.",
      });
    }

    if (userInfo.usuario !== usuario) {
      return res.status(400).json({
        message: "Este usuario no existe.",
      });
    }

    if (userInfo.contrasena !== contrasena) {
      return res.status(400).json({
        message: "Contraseña incorrecta.",
      });
    }

    res.json({
      ok: true,
      user: userInfo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error del servidor",
    });
  }
};

const register = async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const userInfo = await userModule.findOne({ where: { usuario: usuario } });
    if (userInfo) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario ya existe.",
      });
    } else {
      const newUser = await userModule.create({
        usuario,
        contrasena,
      });
      res.json({
        ok: true,
        user: newUser,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Hubo un error, favor de contactar al administrador.",
    });
  }
};

module.exports = {
  login,
  register,
};
