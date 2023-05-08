
const express = require('express');
const Service = require('../../models/services');
const router = express.Router();

router.delete('/services/:serviceId', async (req, res) => {
    const { serviceId } = req.params;
    try {
      const deletedService = await Service.findByIdAndDelete(serviceId);
      res.json(deletedService);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  module.exports = router;