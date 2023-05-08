const express = require('express');
const Service = require('../../models/services');
const router = express.Router();

router.post('/services', async(req, res) => {
  try {
      const { name, price, duration,description } = req.body;
      const service = new Service({ name, price, duration,description });
      const saveServices = await service.save()
      res.status(201).json(saveServices)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
   
  });

  module.exports = router;