const express = require('express');
const Client = require('../../models/clients');
const router = express.Router();


router.put("/users/:id",async(req,res)=>{
    const {fullName,email,phone}=req.body;
    const {id}=req.params;    
    try {
    const updateUsers = await Client.findByIdAndUpdate(id,{fullName,email,phone},
        {new:true}) ;
        res.json(updateUsers)   
    } catch (error) {
        res.status(400).json({ message: err.message }); 
    }
})

module.exports = router;