const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    spec: { type: String, required: true },
    description: { type: String },
    image: { type: String }
});

const ServiceModel = mongoose.model("service",ServiceSchema);
module.exports = ServiceModel;
