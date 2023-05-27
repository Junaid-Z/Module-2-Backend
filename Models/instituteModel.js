import mongoose from "mongoose";
const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    }
})
const instituteModel = mongoose.model('institutes', instituteSchema)
export default instituteModel;
