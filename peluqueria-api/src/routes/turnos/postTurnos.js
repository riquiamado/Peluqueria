const express = require('express');
const Turno = require("../../models/turnos")
const Client = require("../../models/clients")
const Service = require("../../models/services")
const router = express.Router();



router.post('/turnos', async (req, res) => {
    try {
      const { fecha, clienteId, servicioId } = req.body;
  
      // Verificar si el cliente y el servicio existen en la base de datos
      const cliente = await Client.findById(clienteId);
      console.log(cliente)
      const servicio = await Service.findById(servicioId);
      console.log(servicio)
      if (!cliente || !servicio) {
        return res.status(404).json({ error: 'El cliente o el servicio no existen.' });
      }
  
      // Crear un nuevo documento de turno y guardarlo en la base de datos
      const turno = new Turno({
        fecha,
        cliente: cliente._id,
        servicio: servicio._id,
        estado: 'disponible'
      });
      await turno.save();
  
      res.status(201).json(turno);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ha ocurrido un error al crear el turno.' });
    }
  });
  
  module.exports = router;