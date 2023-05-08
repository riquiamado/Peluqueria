

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    email:{
       type: String,
       require:true
    },
    phone:{
       type: String,
       require:true
    },
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }]
    },
    {
    timestamps: false,
    versionKey: false,
    }
)

  const Client = mongoose.model('Client', clientSchema);


module.exports = Client