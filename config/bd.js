//Declaracion de paquete de moongose
const mongoose = require("mongoose");

//Funcion flecha para decirle a js que
//Alguien mas la podra llamar
const dbConnect = () => {
  //Tomar de las env. la variable DB_URI
  const DB_URI = process.env.DB_URI;

  //Conectar a la base de datos
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("DB Connected");
      } else {
        console.log("DB Connection Error");
      }
    }
  );
};

module.exports = dbConnect;
