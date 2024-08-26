const mongoose = require('mongoose')


const AppointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    phone: { type: String, required: true },
    doctor: { type: String, required: true },
    reason: { type: String, required: true }
})

const AppointmentModel = mongoose.model("appointments", AppointmentSchema)
module.exports = AppointmentModel