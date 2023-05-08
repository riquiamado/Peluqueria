
const express = require('express');
const Service = require('../../models/services');
const router = express.Router();

router.put('/services/:serviceId', async (req, res) => {
    const { name, price, duration,description } = req.body;
    const { serviceId } = req.params;
    try {
      const updatedService = await Service.findByIdAndUpdate(
        serviceId,
        { name, price, duration,description },
        { new: true }
      );
      res.json(updatedService);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = router;