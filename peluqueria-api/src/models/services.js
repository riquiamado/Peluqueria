

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
    },
  price: { 
    type: Number, 
    required: true 
    },
  duration: { 
    type: Number, 
    required: true 
    },
    description:{
    type:String,
    required:true
    },
    image: {
      secure_url: String,
      public_id: String
    }
},
{
    timestamps: false,
    versionKey: false,
    }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
