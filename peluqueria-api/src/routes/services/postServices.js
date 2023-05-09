const express = require('express');
const Service = require('../../models/services');
const router = express.Router();
const {uploadimagen}= require("../../utils/cloudinary")
const fs = require("fs-extra")
const multer = require("multer")
require("dotenv").config()
const upload = multer({dest:"uploads/"})

router.post('/services',upload.single("image"), async(req, res) => {
  try {
      const { name, price, duration,description } = req.body;
      const service = new Service({ name, price, duration,description });
      if (req.file) {
        const result = await uploadimagen(req.file.path);
        console.log(result)
        service.image = {
           public_id: result.public_id,
          secure_url: result.secure_url,
        };
        await fs.unlink(req.file.path);
      }
      const saveServices = await service.save()
      res.status(201).json(saveServices)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
   
  });

  module.exports = router;