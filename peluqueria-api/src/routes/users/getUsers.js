const express = require("express");
const Client = require("../../models/clients");
const router = express.Router();


router.get('/users',async(req,res)=>{
    try {
    const users = await Client.find({});
    res.json(users)    
    } catch (error) {
    res.status(500).json({message:error.message})
    }
});

module.exports = router;