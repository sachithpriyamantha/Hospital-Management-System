const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    spec: { type: String, required: true },
    description: { type: String },
    image: { type: String }
});

const doctorModel = mongoose.model("doctors",doctorSchema);
module.exports = doctorModel;
