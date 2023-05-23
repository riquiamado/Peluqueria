

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const clientSchema = new Schema({
    fullName:{
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
    passwordHash: {
      type: String,
    },
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }]
    },
    {
    timestamps: false,
    versionKey: false,
    }
)

  const Client = mongoose.model('Client', clientSchema);
  clientSchema.plugin(uniqueValidator)

module.exports = Client