const express = require('express');
const Client = require('../../models/clients');
const router = express.Router();

router.delete("/users/:id",async(req,res)=>{
    const{id}=req.params;
    try {
    const deleteUsers = await Client.findByIdAndDelete(id);
    res.json(deleteUsers)    
    } catch (error) {
        res.status(400).json({ message: err.message });    
    }
});

module.exports = router;