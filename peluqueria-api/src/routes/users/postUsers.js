const express = require('express');
const  Client  = require('../../models/clients');
const router = express.Router();



router.post('/users', async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const user = new Client({ name, email, phone });
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;