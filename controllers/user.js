const { userModule } = require("../models");

const login = async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const user = await userModule.findOne({
      where: {
        usuario,
        contrasena,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Usuario o contraseña incorrectos",
      });
    }

    res.json({
      ok: true,
      user,
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
    console.log(error);
    return res.status(500).json({
      msg: "Hubo un error, favor de contactar al administrador.",
    });
  }
};

module.exports = {
  login,
  register,
};
