const mongoose = require ("mongoose");

const userSchema= new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    message: { type: String, required: true }
});

module.exports = mongoose.model('UserDetails',userSchema);