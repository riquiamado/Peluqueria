
const express = require('express');
const Client = require('../../models/clients');
const router = express.Router();

router.get("/users/:id",async(req,res)=>{
    try {
    const user = await Client.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"usuario no encontrado"})
    }
    res.json(user)
    } catch (error) {
    res.status(500).json({ message: error.message });   
    }
})

module.exports = router;