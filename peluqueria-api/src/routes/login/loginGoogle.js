
const { Router } = require("express");
const router = Router();
require("dotenv").config();

const {Client}= require("../../models/clients")

router.post("/login_google",async(req,res)=>{
    try {
        const { name, email } = req.body;
  const user = await Client.findOne({ email });
  if (user === null) {
    const user = new Client({ name, email });
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } else {
    res.status(200).json(user);
  }
    } catch (error) {
        console.log(error)
    }
})