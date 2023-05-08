const express = require('express');
const Turno = require('../../models/turnos');
const router = express.Router();

router.get('/turnos', async (req, res) => {
    try {
      // Obtener todos los documentos de Turno en la base de datos
      const turnos = await Turno.find();
  
      res.json(turnos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ha ocurrido un error al obtener los turnos.' });
    }
  });

  module.exports=router;