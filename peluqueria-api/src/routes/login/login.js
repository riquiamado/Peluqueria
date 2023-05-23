const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();
require("dotenv").config();
const Client = require("../../models/clients");

router.post("/login", async (req, res) => {
  

  try {
    const { email, password } = req.body;
    const user = await Client.findOne({ email });

    if (user) {
      if (!password) {
        return res.status(400).json({
          error: "Password is required",
        });
      }
       if (!user.passwordHash) {
        return res.status(400).json({
          error: "Password hash is missing in the user data",
        });
      }
      const passwordCorrect =  user === null ? false : await bcrypt.compare(password, user.passwordHash);
      if (passwordCorrect) {
        // Las credenciales son válidas, continuar con el flujo de inicio de sesión exitoso
        res.status(200).json(user);
      } else {
        // Contraseña incorrecta, devolver error 401
        res.status(401).json({
          error: "Invalid username or password",
        });
      }
    } else {
      // Usuario no encontrado, devolver error 401
      res.status(401).json({
        error: "Invalid username or password",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

module.exports =router;