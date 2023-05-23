const express = require('express');
const  Client  = require('../../models/clients');
const router = express.Router();
const bcrypt = require("bcrypt");



router.post('/users', async (req, res) => {
    try {
      const { fullName, email, phone,password } = req.body;
      if (password) {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        // const passwordHash = password
        const user = new Client({ fullName, email,phone, passwordHash });
        await user.save();
        res.status(200).json({ message: "User saved successfully" });
      // const savedUser = await user.save();
      // res.status(201).json(savedUser);
      }else {
        const user = new Client({ fullName, email });
        await user.save();
        res.status(200).json({ message: "User saved successfully" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;