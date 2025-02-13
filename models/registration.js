const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: String, required: true },
  address: { type: String, required: true },
  license_no: { type: String, required: true },
  id_type: { type: String, enum:["Aadhaar","Passport"], required: true },
  driving_license: { type: String, required: true },  
  id_proof: { type: String, required: true },        
});

const DriverDetails = mongoose.model('DriverDetails', driverSchema);
module.exports = DriverDetails;
