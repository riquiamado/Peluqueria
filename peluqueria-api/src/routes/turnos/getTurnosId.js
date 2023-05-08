const express = require('express');
const Turno = require('../../models/turnos');
const router = express.Router();


router.get('/turnos/:id', async (req, res) => {
    try {
      const turno = await Turno.findById(req.params.id);
      if (!turno) {
        return res.status(404).json({ error: 'El turno no existe.' });
      }
  
      res.json(turno);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ha ocurrido un error al obtener el turno.' });
    }
  });
  
  module.exports = router;