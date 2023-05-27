import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})
const teacherModel = mongoose.model('teachers', teacherSchema)
export default teacherModel;
