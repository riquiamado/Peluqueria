// servicesRoutes.js
const express = require('express');
const Service = require('../../models/services');
const router = express.Router();

router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
