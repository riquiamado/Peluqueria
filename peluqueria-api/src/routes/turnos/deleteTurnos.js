const express = require('express');
const Turno = require('../../models/turnos');
const router = express.Router();

router.delete('/turnos/:id', async (req, res) => {
    try {
      const turno = await Turno.findByIdAndDelete(req.params.id);
      if (!turno) {
        return res.status(404).json({ error: 'El turno no existe.' });
      }
  
      res.json({ message: 'El turno ha sido eliminado correctamente.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ha ocurrido un error al eliminar el turno.' });
    }
  });
  
  module.exports = router;